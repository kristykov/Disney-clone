import React from 'react';
import { client } from '../client/clientAuth';
import { queryVideos } from '../client/queries';

export const getStaticProps = async () => {
  const data = await client.request(queryVideos);
  const videos = data.videos;
  return {
    props: {
      videos,
    },
  };
};

const Home = ({ videos }) => {
  console.log(videos);
  return <div>index</div>;
};

export default Home;
