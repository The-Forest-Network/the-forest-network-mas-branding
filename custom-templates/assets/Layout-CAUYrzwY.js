import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{a as t,i as n,r,t as i}from"./graphql-DoHZA98X.js";import{n as a,t as o}from"./jsx-runtime-BHz_hoGM.js";import{f as s,t as c}from"./useTranslation-CvpQbuHy.js";import{t as l}from"./Link-BFXbBkY2.js";import{t as u}from"./fragment-masking-DSZC2_uz.js";var d=e(a(),1),f=e(s(),1),p={legalFooter:`_legal-footer_1n9he_8`,separator:`_separator_1n9he_24`,imprint:`_imprint_1n9he_29`},m=o(),h=r(`
  fragment Footer_siteConfig on SiteConfig {
    id
    imprint
    tosUri
    policyUri
  }
`),g=({siteConfig:e})=>{let t=u(h,e),{t:n}=c();return(0,m.jsxs)(`footer`,{className:p.legalFooter,children:[(t.policyUri||t.tosUri)&&(0,m.jsxs)(`nav`,{children:[t.policyUri&&(0,m.jsx)(l,{href:t.policyUri,title:n(`branding.privacy_policy.alt`,{defaultValue:`Link to the service privacy policy`}),children:n(`branding.privacy_policy.link`,{defaultValue:`Privacy policy`})}),t.policyUri&&t.tosUri&&(0,m.jsx)(`div`,{className:p.separator,"aria-hidden":`true`,children:`•`}),t.tosUri&&(0,m.jsx)(l,{href:t.tosUri,title:n(`branding.terms_and_conditions.alt`,{defaultValue:`Link to the service terms and conditions`}),children:n(`branding.terms_and_conditions.link`,{defaultValue:`Terms and conditions`})})]}),t.imprint&&(0,m.jsx)(`p`,{className:p.imprint,children:t.imprint})]})},_={layoutContainer:`_layout-container_71fyu_8`,consent:`_consent_71fyu_27`,wide:`_wide_71fyu_31`},v=r(`
  query Footer {
    siteConfig {
      id
      ...Footer_siteConfig
    }
  }
`),y=n({queryKey:[`footer`],queryFn:({signal:e})=>i({query:v,signal:e}),throwOnError:!1}),b=()=>{let e=t(y);if(e.error||e.isPending)return null;let n=e.data?.siteConfig;if(!n)throw Error(`Failed to load site config`);return(0,m.jsx)(g,{siteConfig:n})},x=({children:e,wide:t})=>(0,m.jsxs)(`div`,{className:(0,f.default)(_.layoutContainer,t&&_.wide),children:[e,(0,m.jsx)(d.Suspense,{fallback:null,children:(0,m.jsx)(b,{})})]});export{y as n,x as t};
//# sourceMappingURL=Layout-CAUYrzwY.js.map