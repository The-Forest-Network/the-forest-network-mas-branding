# The Forest Network — MAS Email Branding

Custom Forest Network branding for the user-facing emails in the Forest
Network's Matrix ecosystem: the two emails
[Matrix Authentication Service](https://github.com/element-hq/matrix-authentication-service)
(MAS, our Matrix auth/identity server) sends itself (email-verification and
password-recovery), plus the invite-welcome email sent by the separate
`the-forest-network-mas-invite` admin tool.

## What's in this repo

- **`custom-templates/`** — a full copy of everything MAS's official Docker
  image bundles at `/usr/local/share/mas-cli/` (`templates/`, `assets/`,
  `manifest.json`), unmodified **except**:
  - `templates/emails/verification.html` / `.txt` / `.subject` — rendered by
    MAS itself
  - `templates/emails/recovery.html` / `.txt` / `.subject` — rendered by
    MAS itself
  - `templates/emails/welcome.html` / `.txt` / `.subject` — **not** rendered
    by MAS (it has no welcome-email flow). Consumed independently by the
    private `the-forest-network-mas-invite` repo via a pinned git submodule,
    rendered there with `nunjucks`. Kept here so all Forest Network email
    design has one source of truth. Uses only plain `{{ variable }}`
    interpolation — none of MAS's template globals (`_()`, `branding`,
    `lang`) are available outside MAS's own render pipeline.
- **`branding-patch/`** — unified diffs of the 6 MAS-rendered email files,
  against the pristine files as shipped in the image, so the actual
  customization is reviewable/reapplyable on its own without wading through
  the ~19MB of vendored frontend assets. (`welcome.*` isn't a patch against
  anything upstream — it's original content, not covered here.)

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
5. Re-add `templates/emails/welcome.html` / `.txt` / `.subject` — step 2's
   `docker cp` overwrites the whole `templates/` tree with MAS's pristine
   bundle, which doesn't include these 3 files (they aren't part of MAS at
   all). Restore them from git (`git checkout -- custom-templates/templates/emails/welcome.*`)
   before committing, or they'll silently disappear.
6. Commit, push, and redeploy the MAS container(s) that mount this
   directory.

## Deployment

The general pattern: check this repo out directly at the path MAS's
`templates.path` and `templates.assets_manifest` config point at, so
deploying an update is just `git pull` in that checkout followed by a
container restart — no config or compose changes needed as long as the
directory layout here doesn't change.

This repo is checked out at `/media-server/config/tfn/mas/the-forest-network-mas-branding`
on the host, which is what production MAS (`tfn-mas`, `config/tfn/mas/config.yaml`'s
`templates.path`) mounts and reads from — it's live, not a test stack. A
separate `tfn-test-*` stack (`config/tfn-test/`, `docker-compose.yml`) still
exists alongside it, marked "safe to delete once validated" — that's a
leftover validation stack, not where this repo is deployed.
