const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./_account.sessions.browsers-Covi-DzO.js","./graphql-DoHZA98X.js","./rolldown-runtime-Bh1tDfsg.js","./jsx-runtime-BHz_hoGM.js","./not-found-i5RsCZif.js","./useTranslation-CvpQbuHy.js","./Heading-BC6aWv8D.js","./Text-5cGdO1lY.js","./pagination-DYWPcKZg.js","./dist-DC-fZEsy.js","./ButtonLink-D518vkFm.js","./link-C5HcoTdL.js","./useRouter-B9Ekf4jx.js","./useStore-DgjforN2.js","./Button-BsQwiPxy.js","./UnstyledButton-DUlWjjo6.js","./ButtonLink-C4AMHHR_.css","./Filter-LgaM0DUr.js","./close-RlxFqidR.js","./LastActive-Dm3AG49L.js","./LastActive-C9wo4AOG.css","./fragment-masking-DSZC2_uz.js","./EndBrowserSessionButton-CtKRrA4A.js","./LoadingSpinner-B4qmRXm8.js","./LoadingSpinner-CwGXxUl9.css","./Dialog-BMazobwD.js","./Dialog-By4nccVb.css","./delete-DPbZcv-9.js","./computer-DIo7Ad43.js","./computer-yWPVGPCQ.css","./EndBrowserSessionButton-DtwMemsE.css","./Filter-B4FKBvcu.css"])))=>i.map(i=>d[i]);
import{i as e,r as t,t as n}from"./graphql-DoHZA98X.js";import{n as r,t as i}from"./lazyRouteComponent-WUPQZ1we.js";import{c as a,l as o,n as s,r as c}from"./dist-DC-fZEsy.js";import{t as l}from"./preload-helper-HclGiUj8.js";import{n as u,r as d}from"./pagination-DYWPcKZg.js";import{t as f}from"./dates-C3-JiaMj.js";var p=t(`
  query BrowserSessionList(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $lastActive: DateFilter
  ) {
    viewerSession {
      __typename
      ... on BrowserSession {
        id

        user {
          id

          browserSessions(
            first: $first
            after: $after
            last: $last
            before: $before
            lastActive: $lastActive
            state: ACTIVE
          ) {
            totalCount

            edges {
              cursor
              node {
                id
                ...BrowserSession_session
              }
            }

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
  }
`),m=(t,r)=>e({queryKey:[`browserSessionList`,r,t],queryFn:({signal:e})=>n({query:p,variables:{lastActive:r?{before:f()}:void 0,...t},signal:e})}),h=()=>l(()=>import(`./_account.sessions.browsers-Covi-DzO.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]),import.meta.url),g=s([a({inactive:o(c(!0))}),u]),_=r(`/_account/sessions/browsers`)({validateSearch:g,loaderDeps:({search:{inactive:e,...t}})=>({inactive:e,pagination:d(t,6,`backward`)}),loader:({context:e,deps:{inactive:t,pagination:n}})=>e.queryClient.ensureQueryData(m(n,t)),component:i(h,`component`)});export{m as n,_ as t};
//# sourceMappingURL=_account.sessions.browsers-DXgXQDx1.js.map