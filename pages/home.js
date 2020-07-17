import './../styles/Home.scss';
import Head from 'next/head';

const Home = () => {
  return (
    <section className="section-home">
      <Head>
        <title>Home</title>
      </Head>
      <span className="p-4 font-weight-bold">This is the home page</span>
    </section>
  )
}

export default Home;