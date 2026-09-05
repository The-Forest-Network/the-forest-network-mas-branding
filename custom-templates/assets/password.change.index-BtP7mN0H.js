import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{a as t,r as n,t as r}from"./graphql-DoHZA98X.js";import{n as i,t as a}from"./LoadingSpinner-B4qmRXm8.js";import{n as o,t as s}from"./jsx-runtime-BHz_hoGM.js";import{t as c}from"./useRouter-B9Ekf4jx.js";import{n as l}from"./not-found-i5RsCZif.js";import{t as u}from"./useTranslation-CvpQbuHy.js";import{t as d}from"./Alert-Cv1Qk_aP.js";import{t as f}from"./Form-BGfdeQUz.js";import"./LoadingSpinner-FeQKcGKO.js";import{n as p,r as m,t as h}from"./password_changes-D7XG47Bx.js";import{t as g}from"./PageHeading-UchLojHE.js";import{t as _}from"./Layout-CAUYrzwY.js";import{t as v}from"./password.change.index-CC2lExpE.js";import{t as y}from"./Separator-HVVfTnrU.js";import"./Separator-CFvXpK0N.js";import{t as b}from"./ButtonLink-D518vkFm.js";var x=e(o()),S=s(),C=n(`
  mutation ChangePassword(
    $userId: ID!
    $oldPassword: String!
    $newPassword: String!
  ) {
    setPassword(
      input: {
        userId: $userId
        currentPassword: $oldPassword
        newPassword: $newPassword
      }
    ) {
      status
    }
  }
`);function w(){let{t:e}=u(),{data:{viewer:n,siteConfig:o}}=t(v),s=c();if(n.__typename!==`User`)throw l();let w=n.id,T=(0,x.useRef)(null),E=i({async mutationFn(e){let t=e.get(`current_password`),n=e.get(`new_password`);if(n!==e.get(`new_password_again`))throw Error(`passwords mismatch; this should be checked by the form`);let i=await r({query:C,variables:{userId:w,oldPassword:t,newPassword:n}});return i.setPassword.status===`ALLOWED`&&s.navigate({to:`/password/change/success`}),i.setPassword}}),D=async e=>{e.preventDefault();let t=new FormData(e.currentTarget);E.mutate(t)},O=E.error!==null,k=h(e,E.data?.status);return(0,S.jsx)(_,{children:(0,S.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,S.jsx)(g,{Icon:m,title:e(`frontend.password_change.title`),subtitle:e(`frontend.password_change.subtitle`)}),(0,S.jsxs)(f.Root,{onSubmit:D,method:`POST`,children:[O&&(0,S.jsx)(d,{type:`critical`,title:e(`frontend.password_change.failure.title`),children:e(`frontend.password_change.failure.description.unspecified`)}),k!==void 0&&(0,S.jsx)(d,{type:`critical`,title:e(`frontend.password_change.failure.title`),children:k}),(0,S.jsxs)(f.Field,{name:`current_password`,serverInvalid:E.data?.status===`WRONG_PASSWORD`,children:[(0,S.jsx)(f.Label,{children:e(`frontend.password_change.current_password_label`)}),(0,S.jsx)(f.PasswordControl,{required:!0,autoComplete:`current-password`,ref:T}),(0,S.jsx)(f.ErrorMessage,{match:`valueMissing`,children:e(`frontend.errors.field_required`)}),E.data&&E.data.status===`WRONG_PASSWORD`&&(0,S.jsx)(f.ErrorMessage,{children:e(`frontend.password_change.failure.description.wrong_password`)})]}),(0,S.jsx)(y,{}),(0,S.jsx)(p,{siteConfig:o,forceShowNewPasswordInvalid:E.data&&E.data.status===`INVALID_NEW_PASSWORD`||!1}),(0,S.jsxs)(f.Submit,{kind:`primary`,disabled:E.isPending,children:[!!E.isPending&&(0,S.jsx)(a,{inline:!0}),e(`action.save`)]}),(0,S.jsx)(b,{to:`/`,kind:`tertiary`,children:e(`action.cancel`)})]})]})})}export{w as component};
//# sourceMappingURL=password.change.index-BtP7mN0H.js.map