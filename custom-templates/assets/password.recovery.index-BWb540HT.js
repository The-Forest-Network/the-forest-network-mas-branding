import{a as e,i as t,r as n,t as r}from"./graphql-DoHZA98X.js";import{n as i,t as a}from"./LoadingSpinner-B4qmRXm8.js";import{t as o}from"./jsx-runtime-BHz_hoGM.js";import{n as s}from"./not-found-i5RsCZif.js";import{t as c}from"./useTranslation-CvpQbuHy.js";import{t as l}from"./useSearch-hZGk1hBa.js";import{n as u}from"./useNavigate-_c9R0sfE.js";import{t as d}from"./Button-BsQwiPxy.js";import{t as f}from"./Alert-Cv1Qk_aP.js";import{t as p}from"./error-solid-Bab1gp9Y.js";import{t as m}from"./Form-BGfdeQUz.js";import"./LoadingSpinner-FeQKcGKO.js";import{n as h,r as g,t as _}from"./password_changes-D7XG47Bx.js";import{t as v}from"./PageHeading-UchLojHE.js";import{t as y}from"./fragment-masking-DSZC2_uz.js";import{t as b}from"./Layout-CAUYrzwY.js";import{t as x}from"./ButtonLink-D518vkFm.js";var S=o(),C=n(`
  mutation RecoverPassword($ticket: String!, $newPassword: String!) {
    setPasswordByRecovery(
      input: { ticket: $ticket, newPassword: $newPassword }
    ) {
      status
    }
  }
`),w=n(`
  mutation ResendRecoveryEmail($ticket: String!) {
    resendRecoveryEmail(input: { ticket: $ticket }) {
      status
      progressUrl
    }
  }
`),T=n(`
  fragment RecoverPassword_userRecoveryTicket on UserRecoveryTicket {
    username
    email
  }
`),E=n(`
  fragment RecoverPassword_siteConfig on SiteConfig {
    ...PasswordCreationDoubleInput_siteConfig
  }
`),D=n(`
  query PasswordRecovery($ticket: String!) {
    siteConfig {
      ...RecoverPassword_siteConfig
    }

    userRecoveryTicket(ticket: $ticket) {
      status
      ...RecoverPassword_userRecoveryTicket
    }
  }
`),O=e=>t({queryKey:[`passwordRecovery`,e],queryFn:({signal:t})=>r({query:D,signal:t,variables:{ticket:e}})}),k=()=>{let{t:e}=c();return(0,S.jsxs)(b,{children:[(0,S.jsx)(v,{Icon:p,title:e(`frontend.password_reset.consumed.title`),subtitle:e(`frontend.password_reset.consumed.subtitle`),invalid:!0}),(0,S.jsx)(x,{kind:`secondary`,to:`/`,reloadDocument:!0,children:e(`action.start_over`)})]})},A=e=>{let{t}=c(),n=y(T,e.userRecoveryTicket),o=i({mutationFn:async({ticket:e})=>{let t=await r({query:w,variables:{ticket:e}});if(t.resendRecoveryEmail.status===`SENT`){if(!t.resendRecoveryEmail.progressUrl)throw Error(`Unexpected response, missing progress URL`);window.location.href=t.resendRecoveryEmail.progressUrl,await new Promise(()=>void 0)}return t.resendRecoveryEmail}});return(0,S.jsxs)(b,{children:[(0,S.jsx)(v,{Icon:p,title:t(`frontend.password_reset.expired.title`),subtitle:t(`frontend.password_reset.expired.subtitle`,{email:n.email}),invalid:!0}),o.data?.status===`RATE_LIMITED`&&(0,S.jsx)(f,{type:`critical`,title:t(`frontend.errors.rate_limit_exceeded`)}),(0,S.jsxs)(d,{kind:`primary`,disabled:o.isPending,onClick:t=>{t.preventDefault(),o.mutate({ticket:e.ticket})},children:[!!o.isPending&&(0,S.jsx)(a,{inline:!0}),t(`frontend.password_reset.expired.resend_email`)]}),(0,S.jsx)(x,{kind:`secondary`,to:`/`,reloadDocument:!0,children:t(`action.start_over`)})]})},j=e=>{let{t}=c(),n=u(),o=y(E,e.siteConfig),s=y(T,e.userRecoveryTicket),l=i({mutationFn:async({ticket:e,form:t})=>{let i=t.get(`new_password`);if(i!==t.get(`new_password_again`))throw Error(`passwords mismatch; this should be checked by the form`);let a=await r({query:C,variables:{ticket:e,newPassword:i}});return a.setPasswordByRecovery.status===`ALLOWED`&&await n({to:`/`,reloadDocument:!0}),a.setPasswordByRecovery}}),d=async t=>{t.preventDefault();let n=new FormData(t.currentTarget);l.mutate({ticket:e.ticket,form:n})},p=l.error!==null,x=_(t,l.data?.status);return(0,S.jsx)(b,{children:(0,S.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,S.jsx)(v,{Icon:g,title:t(`frontend.password_reset.title`),subtitle:t(`frontend.password_reset.subtitle`)}),(0,S.jsxs)(m.Root,{onSubmit:d,method:`POST`,children:[p&&(0,S.jsx)(f,{type:`critical`,title:t(`frontend.password_change.failure.title`),children:t(`frontend.password_change.failure.description.unspecified`)}),x!==void 0&&(0,S.jsx)(f,{type:`critical`,title:t(`frontend.password_change.failure.title`),children:x}),(0,S.jsx)(`input`,{type:`hidden`,name:`username`,autoComplete:`username`,value:s.username}),(0,S.jsx)(h,{siteConfig:o,forceShowNewPasswordInvalid:l.data?.status===`INVALID_NEW_PASSWORD`||!1}),(0,S.jsxs)(m.Submit,{kind:`primary`,disabled:l.isPending,children:[!!l.isPending&&(0,S.jsx)(a,{inline:!0}),t(`action.save_and_continue`)]})]})]})})};function M(){let{ticket:t}=l({from:`/password/recovery/`}),{data:{siteConfig:n,userRecoveryTicket:r}}=e(O(t));if(!r)throw s();switch(r.status){case`EXPIRED`:return(0,S.jsx)(A,{ticket:t,userRecoveryTicket:r});case`CONSUMED`:return(0,S.jsx)(k,{});case`VALID`:return(0,S.jsx)(j,{ticket:t,siteConfig:n,userRecoveryTicket:r});default:{let e=r.status;throw Error(`Unhandled case: ${e}`)}}}export{M as component};
//# sourceMappingURL=password.recovery.index-BWb540HT.js.map