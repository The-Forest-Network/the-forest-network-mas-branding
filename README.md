# The Forest Network — MAS Email Branding

Custom Forest Network branding for the two user-facing emails sent by
[Matrix Authentication Service](https://github.com/element-hq/matrix-authentication-service)
(MAS, our Matrix auth/identity server): the registration/email-verification
code email and the password-recovery email.

## What's in this repo

- **`custom-templates/`** — a full copy of everything MAS's official Docker
  image bundles at `/usr/local/share/mas-cli/` (`templates/`, `assets/`,
  `manifest.json`), unmodified **except** the 6 email files:
  - `templates/emails/verification.html` / `.txt` / `.subject`
  - `templates/emails/recovery.html` / `.txt` / `.subject`
- **`branding-patch/`** — unified diffs of just those 6 files, against the
  pristine files as shipped in the image, so the actual customization is
  reviewable/reapplyable on its own without wading through the ~19MB of
  vendored frontend assets.

## Why the whole tree, not just the 6 edited files

MAS's `templates.path` config option is a **full replacement, not an
overlay**: when set, MAS loads templates *only* from that path — every page,
component, and email template, not just the ones you've customized. It also
requires `templates.assets_manifest` to point at a manifest describing the
compiled frontend JS/CSS bundle, which has to correspond to the templates
you're serving.

The email templates themselves render standalone (`render_email_verification_html`
maps straight to `emails/verification.html`, no shared layout wrapper), so
branding them doesn't actually depend on the frontend assets or manifest at
all — but `templates.path` doesn't know that. Pointing it at a directory
means MAS expects *everything* to be there, so `custom-templates/` has to be
a complete copy of the shipped tree with only the 3 email-template pairs
changed, not a minimal diff.

## Upgrade workflow

Because `templates.path` is a full replacement, this tree goes stale every
time the MAS Docker image is upgraded — it needs to be regenerated from the
new image, not hand-patched in place. `custom-templates/` is a build
artifact of *(current MAS image) + (branding-patch/)*, not something to
hand-edit directly, aside from the email templates.

To upgrade:

1. Pull the new MAS image and get a container running with it (even
   briefly), e.g. against the test stack.
2. Re-extract a fresh copy of the bundled templates/assets/manifest:
   ```bash
   docker cp <mas-container>:/usr/local/share/mas-cli/templates ./custom-templates/templates
   docker cp <mas-container>:/usr/local/share/mas-cli/assets    ./custom-templates/assets
   docker cp <mas-container>:/usr/local/share/mas-cli/manifest.json ./custom-templates/manifest.json
   ```
3. Reapply the branding patches:
   ```bash
   patch -p0 < branding-patch/verification.html.patch
   patch -p0 < branding-patch/verification.txt.patch
   patch -p0 < branding-patch/verification.subject.patch
   patch -p0 < branding-patch/recovery.html.patch
   patch -p0 < branding-patch/recovery.txt.patch
   patch -p0 < branding-patch/recovery.subject.patch
   ```
   (Patches are unified diffs against the file paths as they sit inside
   `custom-templates/templates/emails/` — run `patch` from inside
   `custom-templates/` so those relative paths resolve.)
4. If a patch fails to apply cleanly, MAS's upstream copy of that file
   changed — these 6 files change upstream rarely, so this should be
   uncommon. Re-review the file and manually reapply the branding, then
   regenerate the `.patch` file from the new diff.
5. Commit, push, and redeploy the MAS container(s) that mount this
   directory.

## Deployment

This repo is checked out directly at the path MAS's `templates.path` and
`templates.assets_manifest` config point at (currently, on the test stack,
`/media-server/config/tfn-test/mas/custom-templates/`, bind-mounted into the
`tfn-test-mas` container as `/data/custom-templates`). Deploying an update is
just `git pull` in that checkout followed by a container restart — no
config or compose changes needed as long as the directory layout here
doesn't change.

Production MAS (`tfn-mas`) is **not** wired to this repo yet — this is test
stack only, pending sign-off.
