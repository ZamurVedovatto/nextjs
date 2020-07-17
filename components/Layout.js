import './../styles/General.scss'
import Nav from './Nav';

import Head from 'next/head';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://bootswatch.com/_vendor/bootstrap/dist/css/bootstrap.css"></link>
      </Head>
      <Nav />
      { props.children }
    </div>
  )
}

export default Layout;