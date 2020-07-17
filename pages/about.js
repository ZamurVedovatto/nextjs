import './../styles/About.scss';
import Layout from '../components/Layout';
import Head from 'next/head';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <section className="about-section">
        this is about page
      </section>
    </Layout>
  )
}

export default About;