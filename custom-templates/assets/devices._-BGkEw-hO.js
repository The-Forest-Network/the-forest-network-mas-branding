const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./devices._-BMVSmizt.js","./jsx-runtime-BHz_hoGM.js","./rolldown-runtime-Bh1tDfsg.js","./useTranslation-CvpQbuHy.js","./Alert-Cv1Qk_aP.js","./Text-5cGdO1lY.js","./IconButton-8-SP7uXc.js","./UnstyledButton-DUlWjjo6.js","./close-RlxFqidR.js","./link-C5HcoTdL.js","./useRouter-B9Ekf4jx.js","./useStore-DgjforN2.js","./error-solid-Bab1gp9Y.js","./info-CNvpJ2P2.js","./Layout-CAUYrzwY.js","./graphql-DoHZA98X.js","./Link-BFXbBkY2.js","./fragment-masking-DSZC2_uz.js","./Layout-BhJU0SER.css","./Link-CEU-wFgz.js"])))=>i.map(i=>d[i]);
import{i as e,r as t,t as n}from"./graphql-DoHZA98X.js";import{n as r}from"./not-found-i5RsCZif.js";import{n as i}from"./redirect-D3L17tzd.js";import{n as a,t as o}from"./lazyRouteComponent-WUPQZ1we.js";import{t as s}from"./preload-helper-HclGiUj8.js";var c=()=>s(()=>import(`./devices._-BMVSmizt.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url),l=t(`
  query CurrentViewer {
    viewer {
      __typename
      ... on Node {
        id
      }
    }
  }
`),u=e({queryKey:[`currentViewer`],queryFn:({signal:e})=>n({query:l,signal:e})}),d=t(`
  query DeviceRedirect($deviceId: String!, $userId: ID!) {
    session(deviceId: $deviceId, userId: $userId) {
      __typename
      ... on Node {
        id
      }
    }
  }
`),f=(t,r)=>e({queryKey:[`deviceRedirect`,t,r],queryFn:({signal:e})=>n({query:d,variables:{deviceId:t,userId:r},signal:e})}),p=a(`/devices/$`)({async loader({context:e,params:t}){let n=await e.queryClient.fetchQuery(u);if(n.viewer.__typename!==`User`)throw r({global:!0});let a=await e.queryClient.fetchQuery(f(t._splat||``,n.viewer.id));throw a.session?i({to:`/sessions/$id`,params:{id:a.session.id},replace:!0}):r()},notFoundComponent:o(c,`notFoundComponent`)});export{p as t};
//# sourceMappingURL=devices._-BGkEw-hO.js.map