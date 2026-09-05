const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./clients._id-DnT0wJnh.js","./rolldown-runtime-Bh1tDfsg.js","./graphql-DoHZA98X.js","./jsx-runtime-BHz_hoGM.js","./not-found-i5RsCZif.js","./useTranslation-CvpQbuHy.js","./Heading-BC6aWv8D.js","./Text-5cGdO1lY.js","./Link-BFXbBkY2.js","./fragment-masking-DSZC2_uz.js","./Layout-CAUYrzwY.js","./Layout-BhJU0SER.css","./computer-DIo7Ad43.js","./computer-yWPVGPCQ.css","./SessionInfo-Db4hCeVc.js","./info-CNvpJ2P2.js","./VisualListItem-BnoeI2Cr.js","./Separator-HVVfTnrU.js","./Separator-C2iSg9zz.css","./clients-Dttfz2sD.css"])))=>i.map(i=>d[i]);
import{i as e,r as t,t as n}from"./graphql-DoHZA98X.js";import{n as r,t as i}from"./lazyRouteComponent-WUPQZ1we.js";import{t as a}from"./preload-helper-HclGiUj8.js";var o=t(`
  query OAuth2Client($id: ID!) {
    oauth2Client(id: $id) {
      ...OAuth2Client_detail
    }
  }
`),s=t=>e({queryKey:[`oauth2Client`,t],queryFn:({signal:e})=>n({query:o,variables:{id:t},signal:e})}),c=r(`/clients/$id`)({loader:({context:e,params:t})=>e.queryClient.ensureQueryData(s(t.id)),component:i(()=>a(()=>import(`./clients._id-DnT0wJnh.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url),`component`)});export{s as n,c as t};
//# sourceMappingURL=clients._id-DzuvWs_-.js.map