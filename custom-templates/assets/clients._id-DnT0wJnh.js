import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{a as t,r as n}from"./graphql-DoHZA98X.js";import{t as r}from"./jsx-runtime-BHz_hoGM.js";import{n as i}from"./not-found-i5RsCZif.js";import{f as a,t as o}from"./useTranslation-CvpQbuHy.js";import{t as s}from"./Heading-BC6aWv8D.js";import{t as c}from"./Link-BFXbBkY2.js";import{t as l}from"./fragment-masking-DSZC2_uz.js";import{t as u}from"./Layout-CAUYrzwY.js";import{n as d,t as f}from"./clients._id-DzuvWs_-.js";import{n as p}from"./computer-DIo7Ad43.js";import{a as m,i as h,n as g,o as _,r as v,t as y}from"./SessionInfo-Db4hCeVc.js";var b=e(a(),1),x={externalLink:`_external-link_b03cz_8`},S=r(),C=({children:e,className:t,...n})=>(0,S.jsx)(c,{className:(0,b.default)(t,x.externalLink),target:`_blank`,...n,children:e}),w=n(`
  fragment OAuth2Client_detail on Oauth2Client {
    id
    clientId
    clientName
    clientUri
    logoUri
    tosUri
    policyUri
    redirectUris
  }
`),T=({uri:e})=>{if(!e)return null;let t=new URL(e);return(0,S.jsx)(C,{href:e,children:t.host+t.pathname})},E=({client:e})=>{let t=l(w,e),{t:n}=o();return(0,S.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,S.jsxs)(`header`,{className:`flex flex-row gap-2 justify-start items-center`,children:[(0,S.jsx)(p,{logoUri:t.logoUri||void 0,name:t.clientName||t.clientId,size:`1.5rem`}),(0,S.jsx)(s,{children:t.clientName})]}),(0,S.jsxs)(h,{children:[(0,S.jsx)(m,{children:n(`frontend.oauth2_client_detail.details_title`)}),(0,S.jsxs)(v,{children:[t.clientName&&(0,S.jsxs)(y,{children:[(0,S.jsx)(g,{children:n(`frontend.oauth2_client_detail.name`)}),(0,S.jsx)(_,{children:t.clientName})]}),t.tosUri&&(0,S.jsxs)(y,{children:[(0,S.jsx)(g,{children:n(`frontend.oauth2_client_detail.terms`)}),(0,S.jsx)(_,{children:(0,S.jsx)(T,{uri:t.tosUri})})]}),t.policyUri&&(0,S.jsxs)(y,{children:[(0,S.jsx)(g,{children:n(`frontend.oauth2_client_detail.policy`)}),(0,S.jsx)(_,{children:(0,S.jsx)(T,{uri:t.policyUri})})]})]})]})]})};function D(){let{id:e}=f.useParams(),{data:{oauth2Client:n}}=t(d(e));if(!n)throw i();return(0,S.jsx)(u,{children:(0,S.jsx)(E,{client:n})})}export{D as component};
//# sourceMappingURL=clients._id-DnT0wJnh.js.map