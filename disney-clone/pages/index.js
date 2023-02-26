import React from 'react';
import { gql, GraphQLClient } from 'graphql-request';

export const getStaticProps = async () => {
  const url =
    'https://api-eu-west-2.hygraph.com/v2/clekac9kc10bh01tabaa73wii/master';
  const client = new GraphQLClient(url, {
    heders: {
      authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzc0MDgwMzEsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xla2FjOWtjMTBiaDAxdGFiYWE3M3dpaS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNDZlNzQxMDgtNzQwYy00ZTU3LWIxYzYtMDE1MTE5ZmUyNTNiIiwianRpIjoiY2xlbDlma21nMWZzMTAxdWgyZXVhNXI4NyJ9.RsvadOYTChb4WgAjfQzf8URHyhumacbqoT-Vtp1fxZElW4EZZ1Bg4H9f7TAe-pAVHnMTQlqunFJ9Shj4qEMB2sBnMsDZ6a7bFpttXfYZZuemieKgIioLBTRZvetU_o1Gh4IVlTlZaTeAMKJ2mb03WMLDZJQeXZvJEBG9CXy99U3qv2Ill7DS8kKHmXxq5mA4PB9V-zBhPXsleP_K_B4llXdgnZ-9s2HsVYw7C78iRNIgpfopl6qVIXS2jhSvk_bc4j1UziEH1P_TEFK02Ma5_4DGQ9gzKWXW2hXqDUBocC_b--eTaTMameTMNrUAq7O_1OQfR9swQXkyDFtF0zi8yx71dVWHOK72UYz5-d6nJ2oUJXs42a9oIyWzAsfcppz8r5Z3yTGI5YS4i2v9Cp8UQ-WDN9KXYlcpx2lUvVCM86TspxCk3AFCVurBfodW-Z0pNzMFX8JhUsJaMnY9ukUygHpLjWnk16LrbjOowXgJ5N6yzMww7T4Z9YcC1iw_ewPGdGkozBBOnjHWzgd8pnRAcKxxFxnGzhk33DH5m0UiKluSRZm27Q_TTyy4bo1Jdh1IiyHUAnc8ibBryVx0Riffvf0bX9Qji4zZUwooMfOl7Vc_gVMJE29zI99Aiy8uXtbQodcJXTeEgVCjYJT5sRoy2225KWcm3BdJ5f1E-4lq7wM',
    },
  });

  const query = gql`
    query {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const data = await client.request(query);
  console.log(data);
};

const Home = () => {
  return <div>index</div>;
};

export default Home;
