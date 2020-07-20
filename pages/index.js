import './../styles/General.scss';

import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Home from './home';
import PostLink from './../components/PostLink';

const Index = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <Home />
      <div className="container">
        {/* {
          posts.map((post => (
            <div key={post.id} className="card text-white bg-primary m-2">
              <div className="card-header">{post.title}</div>
              <div className="card-body">
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          )))
        } */}

        <ul className="list-group">
          {
            posts.length && (
              posts.map(post => (
                <PostLink key={post.id} id={post.id} title={post.title} />
              ))
            )
          }
        </ul>
      </div>
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