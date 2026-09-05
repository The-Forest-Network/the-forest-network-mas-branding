import{i as e,r as t,t as n}from"./graphql-DoHZA98X.js";var r=t(`
  query CurrentUserGreeting {
    viewer {
      __typename
      ... on User {
        ...UserGreeting_user

        # Get the total count of active app sessions before any filtering
        unfilteredAppSessions: appSessions(first: 1, state: ACTIVE) {
          totalCount
        }
      }
    }

    siteConfig {
      ...UserGreeting_siteConfig
      planManagementIframeUri
      sessionLimit {
        softLimit
      }
    }
  }
`),i=e({queryKey:[`currentUserGreeting`],queryFn:({signal:e})=>n({query:r,signal:e})});export{i as t};
//# sourceMappingURL=_account-sZGcyNdx.js.map