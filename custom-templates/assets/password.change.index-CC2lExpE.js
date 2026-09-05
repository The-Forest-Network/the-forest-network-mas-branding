import{i as e,r as t,t as n}from"./graphql-DoHZA98X.js";var r=t(`
  query PasswordChange {
    viewer {
      __typename
      ... on Node {
        id
      }
    }

    siteConfig {
      ...PasswordCreationDoubleInput_siteConfig
    }
  }
`),i=e({queryKey:[`passwordChange`],queryFn:({signal:e})=>n({query:r,signal:e})});export{i as t};
//# sourceMappingURL=password.change.index-CC2lExpE.js.map