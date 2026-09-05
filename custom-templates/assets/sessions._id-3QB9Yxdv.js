const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./sessions._id-Cg767EVE.js","./jsx-runtime-BHz_hoGM.js","./rolldown-runtime-Bh1tDfsg.js","./useTranslation-CvpQbuHy.js","./Alert-Cv1Qk_aP.js","./Text-5cGdO1lY.js","./IconButton-8-SP7uXc.js","./UnstyledButton-DUlWjjo6.js","./close-RlxFqidR.js","./link-C5HcoTdL.js","./useRouter-B9Ekf4jx.js","./useStore-DgjforN2.js","./error-solid-Bab1gp9Y.js","./info-CNvpJ2P2.js","./Layout-CAUYrzwY.js","./graphql-DoHZA98X.js","./Link-BFXbBkY2.js","./fragment-masking-DSZC2_uz.js","./Layout-BhJU0SER.css","./Link-CEU-wFgz.js","./sessions._id-C3HA10Zj.js","./LoadingSpinner-B4qmRXm8.js","./LoadingSpinner-CwGXxUl9.css","./not-found-i5RsCZif.js","./Button-BsQwiPxy.js","./LastActive-Dm3AG49L.js","./LastActive-C9wo4AOG.css","./Form-BGfdeQUz.js","./LoadingSpinner-FeQKcGKO.js","./check-circle-solid-CUV7IBl0.js","./Dialog-BMazobwD.js","./Dialog-By4nccVb.css","./Heading-BC6aWv8D.js","./VisualListItem-BnoeI2Cr.js","./computer-DIo7Ad43.js","./computer-yWPVGPCQ.css","./EndBrowserSessionButton-CtKRrA4A.js","./delete-DPbZcv-9.js","./EndBrowserSessionButton-DtwMemsE.css","./EndOAuth2SessionButton-FgOgnlD9.js","./edit-peBclVB2.js","./SessionInfo-Db4hCeVc.js","./Separator-HVVfTnrU.js","./Separator-C2iSg9zz.css","./sessions-DRHwjiGg.css"])))=>i.map(i=>d[i]);
import{i as e,r as t,t as n}from"./graphql-DoHZA98X.js";import{n as r,t as i}from"./lazyRouteComponent-WUPQZ1we.js";import{t as a}from"./preload-helper-HclGiUj8.js";var o=t(`
  query SessionDetail($id: ID!) {
    viewerSession {
      ... on Node {
        id
      }
    }

    node(id: $id) {
      __typename
      id
      ...CompatSession_detail
      ...OAuth2Session_detail
      ...BrowserSession_detail
    }
  }
`),s=t=>e({queryKey:[`sessionDetail`,t],queryFn:({signal:e})=>n({query:o,signal:e,variables:{id:t}})}),c=r(`/sessions/$id`)({loader:({context:e,params:t})=>e.queryClient.ensureQueryData(s(t.id)),notFoundComponent:i(()=>a(()=>import(`./sessions._id-Cg767EVE.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url),`notFoundComponent`),component:i(()=>a(()=>import(`./sessions._id-C3HA10Zj.js`),__vite__mapDeps([20,2,15,1,21,3,22,23,9,10,11,24,7,6,8,25,5,26,27,12,28,29,30,31,32,33,17,14,16,18,34,35,36,37,38,39,40,41,13,42,43,44]),import.meta.url),`component`)});export{s as n,c as t};
//# sourceMappingURL=sessions._id-3QB9Yxdv.js.map