const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./emails._id.verify-BG3qd4gZ.js","./rolldown-runtime-Bh1tDfsg.js","./graphql-DoHZA98X.js","./jsx-runtime-BHz_hoGM.js","./LoadingSpinner-B4qmRXm8.js","./useTranslation-CvpQbuHy.js","./LoadingSpinner-CwGXxUl9.css","./not-found-i5RsCZif.js","./useNavigate-_c9R0sfE.js","./useRouter-B9Ekf4jx.js","./Button-BsQwiPxy.js","./UnstyledButton-DUlWjjo6.js","./Alert-Cv1Qk_aP.js","./Text-5cGdO1lY.js","./IconButton-8-SP7uXc.js","./close-RlxFqidR.js","./link-C5HcoTdL.js","./useStore-DgjforN2.js","./error-solid-Bab1gp9Y.js","./info-CNvpJ2P2.js","./Form-BGfdeQUz.js","./LoadingSpinner-FeQKcGKO.js","./check-circle-solid-CUV7IBl0.js","./Trans-C_dpnjwR.js","./i18next-CB7HjFK6.js","./PageHeading-UchLojHE.js","./PageHeading-B_A6bpw8.css","./Layout-CAUYrzwY.js","./Link-BFXbBkY2.js","./fragment-masking-DSZC2_uz.js","./Layout-BhJU0SER.css","./ButtonLink-D518vkFm.js","./ButtonLink-C4AMHHR_.css","./arrow-left-CHx6H_9k.js"])))=>i.map(i=>d[i]);
import{i as e,r as t,t as n}from"./graphql-DoHZA98X.js";import{n as r}from"./not-found-i5RsCZif.js";import{n as i}from"./redirect-D3L17tzd.js";import{n as a,t as o}from"./lazyRouteComponent-WUPQZ1we.js";import{t as s}from"./preload-helper-HclGiUj8.js";var c=()=>s(()=>import(`./emails._id.verify-BG3qd4gZ.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]),import.meta.url),l=t(`
  query VerifyEmail($id: ID!) {
    userEmailAuthentication(id: $id) {
      id
      email
      completedAt
    }
  }
`),u=t=>e({queryKey:[`verifyEmail`,t],queryFn:({signal:e})=>n({query:l,signal:e,variables:{id:t}})}),d=a(`/emails/$id/verify`)({async loader({context:e,params:t}){let n=await e.queryClient.ensureQueryData(u(t.id));if(!n.userEmailAuthentication)throw r();if(n.userEmailAuthentication.completedAt)throw i({to:`/`})},component:o(c,`component`)});export{u as n,d as t};
//# sourceMappingURL=emails._id.verify-oATxF7sJ.js.map