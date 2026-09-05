import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{a as t,r as n,s as r,t as i}from"./graphql-DoHZA98X.js";import{n as a,t as o}from"./LoadingSpinner-B4qmRXm8.js";import{n as s,t as c}from"./jsx-runtime-BHz_hoGM.js";import{n as l}from"./not-found-i5RsCZif.js";import{t as u}from"./link-C5HcoTdL.js";import{t as d}from"./useTranslation-CvpQbuHy.js";import{t as f}from"./Button-BsQwiPxy.js";import{t as p}from"./IconButton-8-SP7uXc.js";import{n as m}from"./close-RlxFqidR.js";import{i as h,n as g,r as _,t as v}from"./LastActive-Dm3AG49L.js";import{t as y}from"./Form-BGfdeQUz.js";import{i as b,n as x,r as S,t as C}from"./Dialog-BMazobwD.js";import{t as ee}from"./Heading-BC6aWv8D.js";import"./LoadingSpinner-FeQKcGKO.js";import{n as w}from"./VisualListItem-BnoeI2Cr.js";import{t as T}from"./fragment-masking-DSZC2_uz.js";import{t as E}from"./Layout-CAUYrzwY.js";import{n as D,t as te}from"./sessions._id-3QB9Yxdv.js";import{n as ne}from"./computer-DIo7Ad43.js";import{t as O}from"./EndBrowserSessionButton-CtKRrA4A.js";import{i as k,n as A,r as j,t as M}from"./EndOAuth2SessionButton-FgOgnlD9.js";import{t as N}from"./edit-peBclVB2.js";import{a as P,c as F,i as I,l as L,n as R,o as z,r as B,s as V,t as H,u as U}from"./SessionInfo-Db4hCeVc.js";var W=e(s(),1),G=c();function K(e,t){return(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`1em`,height:`1em`,fill:`currentColor`,viewBox:`0 0 24 24`,ref:t,...e,children:(0,G.jsx)(`path`,{d:`m13.3 17.3-4.6-4.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 8.425 12q0-.2.062-.375A.9.9 0 0 1 8.7 11.3l4.6-4.6a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L10.8 12l3.9 3.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275`})})}K.displayName=`ChevronLeftIcon`;var q=(0,W.forwardRef)(K),J={header:`_header_1crjt_8`,backButton:`_back-button_1crjt_16`},Y=({children:e,...t})=>(0,G.jsxs)(`header`,{className:J.header,children:[(0,G.jsx)(u,{className:J.backButton,...t,children:(0,G.jsx)(q,{})}),(0,G.jsx)(ee,{children:e})]}),X=n(`
  fragment BrowserSession_detail on BrowserSession {
    id
    createdAt
    finishedAt
    ...EndBrowserSessionButton_session
    userAgent {
      name
      model
      os
    }
    lastActiveIp
    lastActiveAt
    lastAuthentication {
      id
      createdAt
    }
    user {
      id
      username
    }
  }
`),Z=({session:e,isCurrent:t})=>{let n=T(X,e),{t:r}=d(),i=r(`frontend.session.generic_browser_session`);return n.userAgent&&(n.userAgent.model&&n.userAgent.name?i=r(`frontend.session.name_for_platform`,{name:n.userAgent.name,platform:n.userAgent.model}):n.userAgent.name&&n.userAgent.os?i=r(`frontend.session.name_for_platform`,{name:n.userAgent.name,platform:n.userAgent.os}):n.userAgent.name&&(i=n.userAgent.name)),(0,G.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[t&&(0,G.jsx)(h,{className:`self-start`,kind:`green`,children:r(`frontend.browser_session_details.current_badge`)}),(0,G.jsx)(Y,{to:`/sessions/browsers`,children:i}),(0,G.jsxs)(I,{children:[(0,G.jsx)(P,{children:r(`frontend.session.title`)}),(0,G.jsxs)(B,{children:[n.lastActiveAt&&(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:r(`frontend.session.last_active_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(v,{lastActive:_(n.lastActiveAt)})})]}),(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:r(`frontend.session.signed_in_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(g,{datetime:n.createdAt})})]}),n.finishedAt&&(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:r(`frontend.session.finished_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(g,{datetime:n.finishedAt})})]}),n.lastActiveIp&&(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:r(`frontend.session.ip_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(`code`,{children:n.lastActiveIp})})]})]})]}),!n.finishedAt&&(0,G.jsx)(O,{session:n,size:`lg`})]})},re=(0,W.forwardRef)(({label:e,...t},n)=>(0,G.jsx)(m,{label:e,children:(0,G.jsx)(p,{ref:n,type:`button`,size:`var(--cpd-space-6x)`,style:{marginInline:`var(--cpd-space-2x)`},...t,children:(0,G.jsx)(N,{})})})),Q=({mutation:e,deviceName:t})=>{let{t:n}=d(),r=(0,W.useRef)(null),[i,a]=(0,W.useState)(!1);return(0,G.jsxs)(C,{trigger:(0,G.jsx)(re,{label:n(`action.edit`)}),open:i,onOpenChange:e=>{r.current?.form?.reset(),a(e)},children:[(0,G.jsx)(x,{children:n(`frontend.session.set_device_name.title`)}),(0,G.jsx)(b,{asChild:!0,children:(0,G.jsxs)(y.Root,{onSubmit:async t=>{t.preventDefault();let n=t.currentTarget,r=new FormData(n).get(`name`);await e.mutateAsync(r),a(!1)},children:[(0,G.jsxs)(y.Field,{name:`name`,children:[(0,G.jsx)(y.Label,{children:n(`frontend.session.set_device_name.label`)}),(0,G.jsx)(y.TextControl,{type:`text`,required:!0,defaultValue:t,ref:r}),(0,G.jsx)(y.HelpMessage,{children:n(`frontend.session.set_device_name.help`)})]}),(0,G.jsxs)(y.Submit,{disabled:e.isPending,children:[e.isPending&&(0,G.jsx)(o,{inline:!0}),n(`action.save`)]})]})}),(0,G.jsx)(S,{asChild:!0,children:(0,G.jsx)(f,{kind:`tertiary`,children:n(`action.cancel`)})})]})},ie=n(`
  mutation SetCompatSessionName($sessionId: ID!, $displayName: String!) {
    setCompatSessionName(input: { compatSessionId: $sessionId, humanName: $displayName }) {
      status
    }
  }
`),ae=n(`
  fragment CompatSession_detail on CompatSession {
    id
    createdAt
    deviceId
    finishedAt
    lastActiveIp
    lastActiveAt
    humanName

    ...EndCompatSessionButton_session

    userAgent {
      name
      os
      model
    }

    ssoLogin {
      id
      redirectUri
    }
  }
`),oe=({session:e})=>{let t=T(ae,e),{t:n}=d(),o=r(),s=a({mutationFn:e=>i({query:ie,variables:{sessionId:t.id,displayName:e}}),onSuccess:()=>{o.invalidateQueries({queryKey:[`sessionDetail`,t.id]}),o.invalidateQueries({queryKey:[`sessionsOverview`]})}}),c=t.userAgent?.model??(t.userAgent?.name?t.userAgent?.os?n(`frontend.session.name_for_platform`,{name:t.userAgent.name,platform:t.userAgent.os}):t.userAgent.name:n(`frontend.session.unknown_device`)),l=t.ssoLogin?.redirectUri?k(t.ssoLogin.redirectUri):t.deviceId||t.id,u=t.humanName??`${l}: ${c}`;return(0,G.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,G.jsxs)(Y,{to:`/sessions`,children:[u,(0,G.jsx)(Q,{mutation:s,deviceName:u})]}),(0,G.jsxs)(I,{children:[(0,G.jsx)(P,{children:n(`frontend.session.title`)}),(0,G.jsxs)(B,{children:[t.lastActiveAt&&(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.last_active_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(v,{lastActive:_(t.lastActiveAt)})})]}),(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.signed_in_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(g,{datetime:t.createdAt})})]}),t.finishedAt&&(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.finished_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(g,{datetime:t.finishedAt})})]}),(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.device_id_label`)}),(0,G.jsx)(z,{children:t.deviceId})]}),t.lastActiveIp&&(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.ip_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(`code`,{children:t.lastActiveIp})})]})]}),(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.scopes_label`)}),(0,G.jsxs)(w,{className:`mt-1`,children:[(0,G.jsx)(U,{}),(0,G.jsx)(L,{}),(0,G.jsx)(F,{})]})]})]}),(0,G.jsxs)(I,{children:[(0,G.jsx)(P,{children:n(`frontend.compat_session_detail.client_details_title`)}),(0,G.jsxs)(B,{children:[(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.compat_session_detail.name`)}),(0,G.jsx)(z,{children:c})]}),t.ssoLogin&&(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.uri_label`)}),(0,G.jsx)(z,{children:t.ssoLogin?.redirectUri})]})]})]}),!t.finishedAt&&(0,G.jsx)(j,{session:t,size:`lg`})]})},se=n(`
  mutation SetOAuth2SessionName($sessionId: ID!, $displayName: String!) {
    setOauth2SessionName(input: { oauth2SessionId: $sessionId, humanName: $displayName }) {
      status
    }
  }
`),ce=n(`
  fragment OAuth2Session_detail on Oauth2Session {
    id
    scope
    createdAt
    finishedAt
    lastActiveIp
    lastActiveAt
    humanName

    ...EndOAuth2SessionButton_session

    userAgent {
      name
      model
      os
    }

    client {
      id
      clientId
      clientName
      clientUri
      logoUri
    }
  }
`),le=({session:e})=>{let t=T(ce,e),{t:n}=d(),o=r(),s=a({mutationFn:e=>i({query:se,variables:{sessionId:t.id,displayName:e}}),onSuccess:()=>{o.invalidateQueries({queryKey:[`sessionDetail`,t.id]}),o.invalidateQueries({queryKey:[`sessionsOverview`]})}}),c=A(t.scope),l=t.client.clientName||t.client.clientId,u=t.humanName??t.userAgent?.model??(t.userAgent?.name?t.userAgent?.os?n(`frontend.session.name_for_platform`,{name:t.userAgent.name,platform:t.userAgent.os}):t.userAgent.name:n(`frontend.session.unknown_device`));return(0,G.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,G.jsxs)(Y,{to:`/sessions`,children:[l,`: `,u,(0,G.jsx)(Q,{mutation:s,deviceName:u})]}),(0,G.jsxs)(I,{children:[(0,G.jsx)(P,{children:n(`frontend.session.title`)}),(0,G.jsxs)(B,{children:[t.lastActiveAt&&(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.last_active_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(v,{lastActive:_(t.lastActiveAt)})})]}),(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.signed_in_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(g,{datetime:t.createdAt})})]}),t.finishedAt&&(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.finished_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(g,{datetime:t.finishedAt})})]}),(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.device_id_label`)}),(0,G.jsx)(z,{children:c})]}),t.lastActiveIp&&(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.ip_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(`code`,{children:t.lastActiveIp})})]})]}),(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.scopes_label`)}),(0,G.jsx)(V,{scope:t.scope})]})]}),(0,G.jsxs)(I,{children:[(0,G.jsx)(P,{children:n(`frontend.oauth2_session_detail.client_title`)}),(0,G.jsxs)(B,{children:[(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.oauth2_session_detail.client_details_name`)}),(0,G.jsxs)(z,{children:[(0,G.jsx)(ne,{name:t.client.clientName||t.client.clientId,logoUri:t.client.logoUri||void 0,size:`var(--cpd-space-4x)`}),t.client.clientName]})]}),(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.client_id_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(`code`,{children:t.client.clientId})})]}),(0,G.jsxs)(H,{children:[(0,G.jsx)(R,{children:n(`frontend.session.uri_label`)}),(0,G.jsx)(z,{children:(0,G.jsx)(`a`,{target:`_blank`,rel:`noreferrer`,href:t.client.clientUri||void 0,children:t.client.clientUri})})]})]})]}),!t.finishedAt&&(0,G.jsx)(M,{session:t,size:`lg`})]})};function $(){let{id:e}=te.useParams(),{data:{node:n,viewerSession:r}}=t(D(e));if(!n)throw l();switch(n.__typename){case`CompatSession`:return(0,G.jsx)(E,{wide:!0,children:(0,G.jsx)(oe,{session:n})});case`Oauth2Session`:return(0,G.jsx)(E,{wide:!0,children:(0,G.jsx)(le,{session:n})});case`BrowserSession`:return(0,G.jsx)(E,{wide:!0,children:(0,G.jsx)(Z,{session:n,isCurrent:n.id===r.id})});default:throw Error(`Unknown session type`)}}export{$ as component};
//# sourceMappingURL=sessions._id-C3HA10Zj.js.map