import{r as e,s as t,t as n}from"./graphql-DoHZA98X.js";import{n as r}from"./LoadingSpinner-B4qmRXm8.js";import{t as i}from"./jsx-runtime-BHz_hoGM.js";import{t as a}from"./useTranslation-CvpQbuHy.js";import{t as o}from"./fragment-masking-DSZC2_uz.js";import{a as s,d as c,o as l,r as u,s as d}from"./EndBrowserSessionButton-CtKRrA4A.js";var f=e=>{let t;try{t=new URL(e)}catch{return e}return t.search=``,t.hash=``,t.protocol===`https:`?t.hostname:t.toString()},p=i(),m=e(`
  fragment EndCompatSessionButton_session on CompatSession {
    id
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
`),h=e(`
  mutation EndCompatSession($id: ID!) {
    endCompatSession(input: { compatSessionId: $id }) {
      status
      compatSession {
        id
      }
    }
  }
`),g=({session:e,size:i})=>{let{t:g}=a(),_=o(m,e),v=t(),y=r({mutationFn:()=>n({query:h,variables:{id:_.id}}),onSuccess:e=>{v.invalidateQueries({queryKey:[`sessionsOverview`]}),v.invalidateQueries({queryKey:[`currentUserGreeting`]}),v.invalidateQueries({queryKey:[`appSessionList`]}),v.invalidateQueries({queryKey:[`sessionDetail`,e.endCompatSession.compatSession?.id]})}}),b=_.ssoLogin?.redirectUri?f(_.ssoLogin.redirectUri):void 0,x=_.userAgent?.deviceType??`UNKNOWN`,S=_.userAgent?.model??(_.userAgent?.name?_.userAgent?.os?g(`frontend.session.name_for_platform`,{name:_.userAgent.name,platform:_.userAgent.os}):_.userAgent.name:g(`frontend.session.unknown_device`));return(0,p.jsx)(u,{mutation:y,size:i,children:(0,p.jsx)(s,{compact:!0,children:(0,p.jsxs)(d,{type:x,children:[(0,p.jsx)(c,{name:S}),b&&(0,p.jsx)(l,{name:b})]})})})},_=`urn:matrix:org.matrix.msc2967.client:device:`,v=`urn:matrix:client:device:`,y=e=>{let[,t]=e.split(v),[,n]=e.split(_);return t||n},b=e(`
  fragment EndOAuth2SessionButton_session on Oauth2Session {
    id

    userAgent {
      name
      model
      os
      deviceType
    }

    client {
      clientId
      clientName
      applicationType
      logoUri
    }
  }
`),x=e(`
  mutation EndOAuth2Session($id: ID!) {
    endOauth2Session(input: { oauth2SessionId: $id }) {
      status
      oauth2Session {
        id
      }
    }
  }
`),S=e=>e===`WEB`?`PC`:e===`NATIVE`?`MOBILE`:`UNKNOWN`,C=({session:e,size:i})=>{let{t:f}=a(),m=o(b,e),h=t(),g=r({mutationFn:()=>n({query:x,variables:{id:m.id}}),onSuccess:e=>{h.invalidateQueries({queryKey:[`sessionsOverview`]}),h.invalidateQueries({queryKey:[`currentUserGreeting`]}),h.invalidateQueries({queryKey:[`appSessionList`]}),h.invalidateQueries({queryKey:[`sessionDetail`,e.endOauth2Session.oauth2Session?.id]})}}),_=(m.userAgent?.deviceType===`UNKNOWN`?null:m.userAgent?.deviceType)??S(m.client.applicationType),v=m.client.clientName||m.client.clientId,y=m.userAgent?.model??(m.userAgent?.name?m.userAgent?.os?f(`frontend.session.name_for_platform`,{name:m.userAgent.name,platform:m.userAgent.os}):m.userAgent.name:f(`frontend.session.unknown_device`));return(0,p.jsx)(u,{mutation:g,size:i,children:(0,p.jsx)(s,{compact:!0,children:(0,p.jsxs)(d,{type:_,children:[(0,p.jsx)(c,{name:y}),(0,p.jsx)(l,{name:v,logoUri:m.client.logoUri??void 0})]})})})};export{f as i,y as n,g as r,C as t};
//# sourceMappingURL=EndOAuth2SessionButton-FgOgnlD9.js.map