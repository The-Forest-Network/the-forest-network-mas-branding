const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./_account.sessions.index-D_Bl5_ym.js","./graphql-DoHZA98X.js","./rolldown-runtime-Bh1tDfsg.js","./jsx-runtime-BHz_hoGM.js","./not-found-i5RsCZif.js","./useTranslation-CvpQbuHy.js","./Text-5cGdO1lY.js","./close-RlxFqidR.js","./link-C5HcoTdL.js","./useRouter-B9Ekf4jx.js","./useStore-DgjforN2.js","./Alert-Cv1Qk_aP.js","./IconButton-8-SP7uXc.js","./UnstyledButton-DUlWjjo6.js","./error-solid-Bab1gp9Y.js","./info-CNvpJ2P2.js","./LastActive-Dm3AG49L.js","./LastActive-C9wo4AOG.css","./Heading-BC6aWv8D.js","./fragment-masking-DSZC2_uz.js","./pagination-DYWPcKZg.js","./dist-DC-fZEsy.js","./Separator-HVVfTnrU.js","./Separator-C2iSg9zz.css","./Separator-CFvXpK0N.js","./ButtonLink-D518vkFm.js","./Button-BsQwiPxy.js","./ButtonLink-C4AMHHR_.css","./EndBrowserSessionButton-CtKRrA4A.js","./LoadingSpinner-B4qmRXm8.js","./LoadingSpinner-CwGXxUl9.css","./Dialog-BMazobwD.js","./Dialog-By4nccVb.css","./delete-DPbZcv-9.js","./computer-DIo7Ad43.js","./computer-yWPVGPCQ.css","./EndBrowserSessionButton-DtwMemsE.css","./Filter-LgaM0DUr.js","./Filter-B4FKBvcu.css","./EndOAuth2SessionButton-FgOgnlD9.js","./Link-CEU-wFgz.js","./Link-BFXbBkY2.js","./_account.sessions-Dc5TuSQC.css"])))=>i.map(i=>d[i]);
import{i as e,r as t,t as n}from"./graphql-DoHZA98X.js";import{n as r,t as i}from"./lazyRouteComponent-WUPQZ1we.js";import{c as a,l as o,n as s,r as c}from"./dist-DC-fZEsy.js";import{t as l}from"./preload-helper-HclGiUj8.js";import{n as u,r as d}from"./pagination-DYWPcKZg.js";import{t as f}from"./dates-C3-JiaMj.js";var p=t(`
  query SessionsOverview {
    viewer {
      __typename

      ... on User {
        id
        ...BrowserSessionsOverview_user

        # Get the total count of active app sessions before any filtering
        unfilteredAppSessions: appSessions(first: 1, state: ACTIVE) {
          totalCount
        }
      }
    }

    siteConfig {
      sessionLimit {
        softLimit
      }
    }
  }
`),m=e({queryKey:[`sessionsOverview`],queryFn:({signal:e})=>n({query:p,signal:e})}),h=t(`
  query AppSessionsList(
    $before: String
    $after: String
    $first: Int
    $last: Int
    $lastActive: DateFilter
  ) {
    viewer {
      __typename

      ... on User {
        id
        appSessions(
          before: $before
          after: $after
          first: $first
          last: $last
          lastActive: $lastActive
          state: ACTIVE
        ) {
          edges {
            cursor
            node {
              __typename
              ...CompatSession_session
              ...OAuth2Session_session
            }
          }

          totalCount
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  }
`),g=(t,r)=>e({queryKey:[`appSessionList`,r,t],queryFn:({signal:e})=>n({query:h,variables:{lastActive:r?{before:f()}:void 0,...t},signal:e})}),_=()=>l(()=>import(`./_account.sessions.index-D_Bl5_ym.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]),import.meta.url),v=s([a({inactive:o(c(!0))}),u]),y=r(`/_account/sessions/`)({validateSearch:v,loaderDeps:({search:{inactive:e,...t}})=>({inactive:e,pagination:d(t,6,`backward`)}),loader:({context:e,deps:{inactive:t,pagination:n}})=>Promise.all([e.queryClient.ensureQueryData(m),e.queryClient.ensureQueryData(g(n,t))]),component:i(_,`component`)});export{g as n,m as r,y as t};
//# sourceMappingURL=_account.sessions.index-BAveJqba.js.map