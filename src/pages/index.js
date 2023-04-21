import Head from 'next/head';
import Home from 'components/Home';
import Layout from 'components/Layout';
//import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import Introduction from 'components/Introduction';
import Contacts from 'components/Contact';

//import { getDataFromBucket } from 'lib/api';
import chooseByType from 'utils/chooseValueByType';

function Template({ data }) {
  return (
    <>
      <Head>
        <title>Next.js Restaurant CMS</title>
        <meta name="description" content="Create template using cosmic.js CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout >
        <Home info={chooseByType(data, 'header')}/>
        <AboutUs info={chooseByType(data, 'about')}/>
        <Introduction info={chooseByType(data, 'history')}/>
      </Layout>
      <Contacts info={chooseByType(data, 'contact')}/>
    </>
  )
}

/*
  export async function getStaticProps({ preview }) {
  const data = (await getDataFromBucket(preview)) || [];
  return {
    props: { data },
  }
}
*/

export default Template;