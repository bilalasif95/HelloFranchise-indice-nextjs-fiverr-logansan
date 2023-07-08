import Head from 'next/head';
import { Toaster } from "react-hot-toast";
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta 
          charSet='utf-8' 
        />
        <meta 
          name='viewport' 
          content='width=device-width, initial-scale=1' 
        />
        <title>HelloFranchise - Directory & Listing Of The Worlds Most Successful Franchises</title>
        <script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
        <script>
          Weglot.initialize({
            api_key: 'wg_a80c0ace692c50a2b2367b9a32b6c61d0'
          });
        </script>
      </Head>

      {children}

      <Toaster 
        position="bottom-center" 
      />
    </>
  );
};

export default Layout;
