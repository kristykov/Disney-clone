import { gql } from 'graphql-request';

export const queryVideos = gql`
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

export const querySlug = gql`
  query ($pageSlug: String!) {
    video(where: { slug: $pageSlug }) {
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
