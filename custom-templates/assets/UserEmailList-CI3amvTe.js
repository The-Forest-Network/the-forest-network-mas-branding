import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{a as t,i as n,r,s as i,t as a}from"./graphql-DoHZA98X.js";import{n as o,t as s}from"./LoadingSpinner-B4qmRXm8.js";import{n as c,t as l}from"./jsx-runtime-BHz_hoGM.js";import{n as u}from"./not-found-i5RsCZif.js";import{t as d}from"./useTranslation-CvpQbuHy.js";import{t as f}from"./Button-BsQwiPxy.js";import{t as p}from"./IconButton-8-SP7uXc.js";import{n as m}from"./close-RlxFqidR.js";import{r as h,t as g}from"./Form-BGfdeQUz.js";import{i as _,n as v,r as y,t as b}from"./Dialog-BMazobwD.js";import"./LoadingSpinner-FeQKcGKO.js";import{t as x}from"./fragment-masking-DSZC2_uz.js";import{a as S,i as C,t as w}from"./pagination-DYWPcKZg.js";import{t as T}from"./delete-DPbZcv-9.js";var E=({ns:e,children:t,...n})=>{let[r,i,a]=d(e,n);return t(r,{i18n:i,lng:i?.language},a)},D=r(`
  query UserProfile {
    viewerSession {
      __typename
      ... on BrowserSession {
        id
        user {
          ...AddEmailForm_user
          ...UserEmailList_user
          ...AccountDeleteButton_user
          hasPassword
          emails(first: 0) {
            totalCount
          }
        }
      }
    }

    siteConfig {
      emailChangeAllowed
      passwordLoginEnabled
      accountDeactivationAllowed
      ...AddEmailForm_siteConfig
      ...UserEmailList_siteConfig
      ...PasswordChange_siteConfig
      ...AccountDeleteButton_siteConfig
    }
  }
`),O=n({queryKey:[`userProfile`],queryFn:({signal:e})=>a({query:D,signal:e})}),k=e(c(),1),A=l(),j=({onNext:e,onPrev:t,autoHide:n,count:r,disabled:i})=>{let{t:a}=d();return n&&!e&&!t?null:(0,A.jsxs)(`div`,{className:`grid items-center grid-cols-3 gap-2`,children:[(0,A.jsx)(f,{kind:`secondary`,size:`md`,disabled:i||!t,onClick:()=>t?.(),children:a(`common.previous`)}),(0,A.jsx)(`div`,{className:`text-center`,children:r===void 0?null:a(`frontend.pagination_controls.total`,{totalCount:r})}),(0,A.jsx)(f,{kind:`secondary`,size:`md`,disabled:i||!e,onClick:()=>e?.(),children:a(`common.next`)})]})};function M(e,t){return(0,A.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`1em`,height:`1em`,fill:`currentColor`,viewBox:`0 0 24 24`,ref:t,...e,children:(0,A.jsx)(`path`,{d:`M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 0v1.412l8 4.444 8-4.444V6zm0 3.7V18h16V9.7l-7.514 4.174a1 1 0 0 1-.972 0z`})})}M.displayName=`EmailIcon`;var N=(0,k.forwardRef)(M),P=()=>{let e=(0,k.useRef)({prompt:()=>{throw Error(`PasswordConfirmationModal is not mounted!`)}});return[(0,k.useCallback)(()=>e.current.prompt(),[]),e]},F=({title:e,destructive:t,ref:n})=>{let[r,i]=(0,k.useState)(!1),{t:a}=d(),o=(0,k.useRef)(null);(0,k.useImperativeHandle)(n,()=>({prompt:()=>(i(!0),o.current===null&&(o.current=Promise.withResolvers()),o.current.promise)}));let s=(0,k.useCallback)(e=>{i(e),e||(o.current?.reject(Error(`User cancelled password prompt`)),o.current=null)},[]),c=(0,k.useCallback)(e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`password`);if(typeof t!=`string`)throw Error();o.current?.resolve(t),o.current=null,i(!1)},[]);return(0,A.jsxs)(b,{open:r,onOpenChange:s,children:[(0,A.jsx)(v,{children:e}),(0,A.jsx)(_,{asChild:!0,children:(0,A.jsxs)(g.Root,{onSubmit:c,children:[(0,A.jsxs)(g.Field,{name:`password`,children:[(0,A.jsx)(g.Label,{children:a(`common.password`)}),(0,A.jsx)(g.PasswordControl,{autoFocus:!0,autoComplete:`current-password`})]}),(0,A.jsx)(f,{type:`submit`,kind:`primary`,destructive:t,children:a(`action.confirm`)})]})}),(0,A.jsx)(y,{asChild:!0,children:(0,A.jsx)(f,{kind:`tertiary`,children:a(`action.cancel`)})})]})},I={userEmail:`_user-email_q0ko9_8`,userEmailLine:`_user-email-line_q0ko9_15`,userEmailDeleteIcon:`_user-email-delete-icon_q0ko9_21`,userEmailField:`_user-email-field_q0ko9_29`,userEmailUnverified:`_user-email-unverified_q0ko9_33`,emailModalBox:`_email-modal-box_q0ko9_37`,link:`_link_q0ko9_56`},L=r(`
  fragment UserEmail_email on UserEmail {
    id
    email
  }
`),R=r(`
  mutation RemoveEmail($id: ID!, $password: String) {
    removeEmail(input: { userEmailId: $id, password: $password }) {
      status

      user {
        id
      }
    }
  }
`),z=({disabled:e,onClick:t})=>(0,A.jsx)(E,{children:n=>(0,A.jsx)(m,{label:n(`frontend.user_email.delete_button_title`),children:(0,A.jsx)(p,{type:`button`,disabled:e,className:`m-2`,onClick:t,size:`var(--cpd-space-8x)`,children:(0,A.jsx)(T,{className:I.userEmailDeleteIcon})})})}),B=({email:e,canRemove:t,shouldPromptPassword:n,onRemove:r})=>{let{t:c}=d(),[l,u]=(0,k.useState)(!1),p=x(L,e),m=i(),[S,C]=P(),w=o({mutationFn:({id:e,password:t})=>a({query:R,variables:{id:e,password:t}}),onSuccess:e=>{m.invalidateQueries({queryKey:[`currentUserGreeting`]}),m.invalidateQueries({queryKey:[`userEmails`]}),!(e.removeEmail.status!==`NOT_FOUND`&&e.removeEmail.status!==`REMOVED`)&&(r?.(),u(!1))}}),E=(0,k.useCallback)(async e=>{let t;n&&(t=await S()),w.mutate({id:p.id,password:t})},[p.id,S,n,w.mutate]),D=(0,k.useCallback)(e=>{w.isPending||(w.reset(),u(e))},[w.isPending,w.reset]),O=w.data?.removeEmail.status??null;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(F,{title:c(`frontend.user_email.delete_button_confirmation_modal.password_confirmation`),destructive:!0,ref:C}),(0,A.jsx)(g.Root,{children:(0,A.jsxs)(g.Field,{name:`email`,children:[(0,A.jsx)(g.Label,{children:c(`frontend.user_email.email`)}),(0,A.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,A.jsx)(g.TextControl,{type:`email`,readOnly:!0,value:p.email,className:I.userEmailField}),t&&(0,A.jsxs)(b,{trigger:(0,A.jsx)(z,{}),open:l,onOpenChange:D,children:[(0,A.jsx)(v,{children:c(`frontend.user_email.delete_button_confirmation_modal.body`)}),(0,A.jsxs)(_,{className:I.emailModalBox,children:[(0,A.jsx)(N,{}),(0,A.jsx)(`div`,{children:p.email})]}),O===`INCORRECT_PASSWORD`&&(0,A.jsx)(h,{children:c(`frontend.user_email.delete_button_confirmation_modal.incorrect_password`)}),(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsxs)(f,{kind:`primary`,type:`button`,destructive:!0,onClick:E,disabled:w.isPending,Icon:w.isPending?void 0:T,children:[!!w.isPending&&(0,A.jsx)(s,{inline:!0}),c(`frontend.user_email.delete_button_confirmation_modal.action`)]}),(0,A.jsx)(y,{asChild:!0,children:(0,A.jsx)(f,{disabled:w.isPending,kind:`tertiary`,children:c(`action.cancel`)})})]})]})]})]})})]})},V=r(`
  query UserEmailList(
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    viewer {
      __typename
      ... on User {
        emails(first: $first, after: $after, last: $last, before: $before) {
          edges {
            cursor
            node {
              ...UserEmail_email
            }
          }
          totalCount
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    }
  }
`),H=(e={first:6})=>n({queryKey:[`userEmails`,e],queryFn:({signal:t})=>a({query:V,variables:e,signal:t})}),U=r(`
  fragment UserEmailList_user on User {
    hasPassword
  }
`),W=r(`
  fragment UserEmailList_siteConfig on SiteConfig {
    emailChangeAllowed
    passwordLoginEnabled
  }
`),G=({siteConfig:e,user:n})=>{let{emailChangeAllowed:r,passwordLoginEnabled:i}=x(W,e),{hasPassword:a}=x(U,n),o=a&&i,[s,c]=(0,k.useTransition)(),[l,d]=S(),f=t(H(l));if(f.data.viewer.__typename!==`User`)throw u();let p=f.data.viewer.emails,[m,h]=C(l,p.pageInfo),g=e=>{c(()=>{d(e)})},_=()=>{c(()=>{d(w)})},v=r&&p.totalCount>1;return(0,A.jsxs)(A.Fragment,{children:[p.edges.map(e=>(0,A.jsx)(B,{email:e.node,canRemove:v,shouldPromptPassword:o,onRemove:_},e.cursor)),(0,A.jsx)(j,{autoHide:!0,count:p.totalCount,onPrev:m?()=>g(m):null,onNext:h?()=>g(h):null,disabled:s})]})};export{O as a,P as i,H as n,E as o,F as r,G as t};
//# sourceMappingURL=UserEmailList-CI3amvTe.js.map