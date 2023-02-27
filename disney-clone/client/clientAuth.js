import { GraphQLClient } from 'graphql-request';

const url = process.env.ENDPOINT;

export const client = new GraphQLClient(url, {
  heders: {
    authorization: process.env.GRAPH_CMS_TOKEN,
  },
});
