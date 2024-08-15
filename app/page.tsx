// pages/index.tsx
import dynamic from 'next/dynamic';
import Head from 'next/head';

const MapComponent = dynamic(() => import('../components/Map'), { ssr: false });

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Map Project</title>
      </Head>
      <h1>Map of Indian Cities</h1>
      <MapComponent />
    </div>
  );
};

export default Home;
