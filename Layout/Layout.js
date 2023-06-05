import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import Head from 'next/head';

const Layout = ({children,title}) => {
    return (
        <div className='container mx-auto'>
            <Navbar />
             <Head>
        <title>{title}</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>
      {children}
      <Footer />
        </div>
    );
};

export default Layout;