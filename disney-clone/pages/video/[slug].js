import React from 'react';
import { client } from '../../client/clientAuth';
import { querySlug } from '../../client/queries';

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  const variables = {
    pageSlug,
  };

  const data = await client.request(querySlug, variables);

  return {
    props: {
      video: data.video,
    },
  };
};

const Video = ({ video }) => {
  console.log(video);
  return <div>Video</div>;
};

export default Video;
