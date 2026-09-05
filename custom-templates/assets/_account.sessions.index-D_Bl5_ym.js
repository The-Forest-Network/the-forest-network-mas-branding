import{a as e,r as t}from"./graphql-DoHZA98X.js";import{t as n}from"./jsx-runtime-BHz_hoGM.js";import{n as r}from"./not-found-i5RsCZif.js";import{t as i}from"./useTranslation-CvpQbuHy.js";import{t as a}from"./Text-5cGdO1lY.js";import{n as o}from"./close-RlxFqidR.js";import{t as s}from"./Alert-Cv1Qk_aP.js";import{t as c}from"./info-CNvpJ2P2.js";import{n as l,r as u,t as d}from"./LastActive-Dm3AG49L.js";import{n as f,r as p,t as m}from"./Heading-BC6aWv8D.js";import{t as h}from"./fragment-masking-DSZC2_uz.js";import{i as g}from"./pagination-DYWPcKZg.js";import{n as _,r as v,t as y}from"./_account.sessions.index-BAveJqba.js";import{t as b}from"./Separator-HVVfTnrU.js";import"./Separator-CFvXpK0N.js";import{t as x}from"./ButtonLink-D518vkFm.js";import{c as S,d as C,f as w,i as T,l as E,o as D,s as O,u as k}from"./EndBrowserSessionButton-CtKRrA4A.js";import{i as A,n as j,t as M}from"./Filter-LgaM0DUr.js";import{i as N,n as P,r as F,t as I}from"./EndOAuth2SessionButton-FgOgnlD9.js";import{t as L}from"./Link-CEU-wFgz.js";var R=n(),z=t(`
  fragment CompatSession_session on CompatSession {
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
      deviceType
    }
    ssoLogin {
      id
      redirectUri
    }
  }
`),B=({session:e})=>{let{t}=i(),n=h(z,e),r=n.humanName??(n.ssoLogin?.redirectUri?N(n.ssoLogin.redirectUri):void 0),a=n.userAgent?.deviceType??`UNKNOWN`,o=n.userAgent?.model??(n.userAgent?.name?n.userAgent?.os?t(`frontend.session.name_for_platform`,{name:n.userAgent.name,platform:n.userAgent.os}):n.userAgent.name:t(`frontend.session.unknown_device`)),s=u(n.createdAt),c=n.lastActiveAt?u(n.lastActiveAt):void 0;return(0,R.jsxs)(w,{children:[(0,R.jsxs)(E,{to:`/sessions/$id`,params:{id:n.id},disabled:!!n.finishedAt,children:[(0,R.jsxs)(O,{type:a,children:[(0,R.jsx)(C,{name:o}),r&&(0,R.jsx)(D,{name:r,logoUri:A(n.userAgent?.name??void 0)})]}),(0,R.jsxs)(k,{children:[c&&(0,R.jsx)(S,{label:t(`frontend.session.last_active_label`),children:(0,R.jsx)(d,{lastActive:c})}),(0,R.jsx)(S,{label:t(`frontend.session.signed_in_label`),children:(0,R.jsx)(l,{datetime:s})}),(0,R.jsx)(S,{label:t(`frontend.session.device_id_label`),children:n.deviceId})]})]}),!n.finishedAt&&(0,R.jsx)(T,{children:(0,R.jsx)(F,{session:n,size:`md`})})]})},V=t(`
  fragment OAuth2Session_session on Oauth2Session {
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
      deviceType
    }

    client {
      id
      clientId
      clientName
      applicationType
      logoUri
    }
  }
`),H=e=>e===`WEB`?`PC`:e===`NATIVE`?`MOBILE`:`UNKNOWN`,U=({session:e})=>{let{t}=i(),n=h(V,e),r=P(n.scope),a=u(n.createdAt),o=n.lastActiveAt?u(n.lastActiveAt):void 0,s=(n.userAgent?.deviceType===`UNKNOWN`?null:n.userAgent?.deviceType)??H(n.client.applicationType),c=n.client.clientName||n.client.clientId,f=n.humanName??n.userAgent?.model??(n.userAgent?.name?n.userAgent?.os?t(`frontend.session.name_for_platform`,{name:n.userAgent.name,platform:n.userAgent.os}):n.userAgent.name:t(`frontend.session.unknown_device`));return(0,R.jsxs)(w,{children:[(0,R.jsxs)(E,{to:`/sessions/$id`,params:{id:n.id},disabled:!!n.finishedAt,children:[(0,R.jsxs)(O,{type:s,children:[(0,R.jsx)(C,{name:f}),(0,R.jsx)(D,{name:c,logoUri:n.client.logoUri??void 0})]}),(0,R.jsxs)(k,{children:[o&&(0,R.jsx)(S,{label:t(`frontend.session.last_active_label`),children:(0,R.jsx)(d,{lastActive:o})}),(0,R.jsx)(S,{label:t(`frontend.session.signed_in_label`),children:(0,R.jsx)(l,{datetime:a})}),r&&(0,R.jsx)(S,{label:t(`frontend.session.device_id_label`),children:r})]})]}),!n.finishedAt&&(0,R.jsx)(T,{children:(0,R.jsx)(I,{session:n,size:`md`})})]})},W={browserSessionsOverview:`_browser-sessions-overview_xlk0o_8`},G=t(`
  fragment BrowserSessionsOverview_user on User {
    browserSessions(first: 0, state: ACTIVE) {
      totalCount
    }
  }
`),K=({user:e})=>{let t=h(G,e),{t:n}=i();return(0,R.jsxs)(`div`,{className:W.browserSessionsOverview,children:[(0,R.jsxs)(`div`,{className:`flex flex-1 flex-col`,children:[(0,R.jsx)(p,{children:n(`frontend.browser_sessions_overview.heading`)}),(0,R.jsx)(a,{children:n(`frontend.browser_sessions_overview.body`,{count:t.browserSessions.totalCount})})]}),(0,R.jsx)(L,{to:`/sessions/browsers`,children:n(`frontend.browser_sessions_overview.view_all_button`)})]})},q=e=>{throw Error(`Unknown session type: ${e}`)};function J(){let{t}=i(),{inactive:n,pagination:a}=y.useLoaderDeps(),{data:{viewer:l,siteConfig:u}}=e(v);if(l.__typename!==`User`)throw r();let{sessionLimit:d}=u,{data:p}=e(_(a,n));if(p.viewer.__typename!==`User`)throw r();let h=p.viewer.appSessions,[S,C]=g(a,h.pageInfo,6),w=[...h.edges].reverse(),T=t(`frontend.user_sessions_overview.num_sessions_header`,{count:h.totalCount});if(l.unfilteredAppSessions.totalCount!==h.totalCount){let e=t(`frontend.user_sessions_overview.num_sessions_filtered_header.unfiltered_session_total`,{count:l.unfilteredAppSessions.totalCount});T=t(`frontend.user_sessions_overview.num_sessions_filtered_header.header`,{count:h.totalCount,unfiltered_session_total:e})}let E=null;d&&(E=(0,R.jsx)(o,{label:t(`frontend.user_sessions_overview.session_limit_info`,{count:l.unfilteredAppSessions.totalCount,limit:d.softLimit}),children:(0,R.jsx)(c,{})}));let D=null;return d&&l.unfilteredAppSessions.totalCount>=d.softLimit?D=(0,R.jsx)(s,{type:`critical`,title:t(`frontend.user_sessions_overview.hit_session_limit_warning_header`),"data-testid":`device-limit-error`,children:t(`frontend.user_sessions_overview.hit_session_limit_warning_description`,{count:d.softLimit,num_sessions:l.unfilteredAppSessions.totalCount})}):d&&l.unfilteredAppSessions.totalCount>0&&l.unfilteredAppSessions.totalCount+Math.ceil(d.softLimit*.2)>=d.softLimit&&(D=(0,R.jsx)(s,{type:`info`,title:t(`frontend.user_sessions_overview.approaching_session_limit_warning_header`),"data-testid":`device-limit-warning`,children:t(`frontend.user_sessions_overview.approaching_session_limit_warning_description`,{count:d.softLimit,num_sessions:l.unfilteredAppSessions.totalCount})})),(0,R.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,R.jsx)(m,{children:t(`frontend.user_sessions_overview.heading`)}),(0,R.jsx)(K,{user:l}),(0,R.jsxs)(f,{className:`flex gap-1 items-center`,children:[T,E]}),(0,R.jsx)(b,{kind:`section`}),D,(0,R.jsx)(`div`,{className:`flex gap-2 justify-start items-center`,children:(0,R.jsx)(M,{to:`/sessions`,enabled:n,search:{inactive:!n||void 0},children:t(`frontend.last_active.inactive_90_days`)})}),w.map(e=>{let t=e.node.__typename;switch(t){case`Oauth2Session`:return(0,R.jsx)(U,{session:e.node},e.cursor);case`CompatSession`:return(0,R.jsx)(B,{session:e.node},e.cursor);default:return q(t)}}),h.totalCount===0&&(0,R.jsx)(j,{children:t(n?`frontend.user_sessions_overview.no_active_sessions.inactive_90_days`:`frontend.user_sessions_overview.no_active_sessions.default`)}),(C||S)&&(0,R.jsxs)(`div`,{className:`flex *:flex-1`,children:[(0,R.jsx)(x,{kind:`secondary`,size:`md`,disabled:!C,to:`/sessions`,search:{inactive:n,...C||a},resetScroll:!0,children:t(`common.previous`)}),(0,R.jsx)(`div`,{}),(0,R.jsx)(x,{kind:`secondary`,size:`md`,disabled:!S,to:`/sessions`,search:{inactive:n,...S||a},resetScroll:!0,children:t(`common.next`)})]})]})}export{J as component};
//# sourceMappingURL=_account.sessions.index-D_Bl5_ym.js.map