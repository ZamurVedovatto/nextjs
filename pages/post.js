import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Head from 'next/head';

const Post = (props) => {
  const { post } = props; 
  console.log(post);

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="about-section">
        <h1>{post.title}</h1>
        <span>{post.body}</span>
      </section>
    </Layout>
  )
}

Post.getInitialProps = async (context) => {
  console.log(context.query);
  const id = context.query.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const postData = await res.json();
  return {
    post: postData
  }
}

export default Post;