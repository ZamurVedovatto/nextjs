import './../styles/General.scss';

import Layout from '../components/Layout';
import Home from './Home';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
  console.log(props);

  return (
    <Layout>
      <Home />
    </Layout>
  )
}

Index.getInitialProps = async ( context ) => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const results = await data.json();
  return {
    posts: results
  }
}

export default Index;