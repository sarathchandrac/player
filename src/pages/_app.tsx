import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import  Head  from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </>
  
  )
}

export default MyApp
