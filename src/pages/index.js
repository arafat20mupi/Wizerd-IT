import { Helmet } from 'react-helmet';
import Navbar from '../components/Portfolio/Navbar';
import { Outlet } from 'react-router-dom';
import LoadingScreen from '../components/common/loader';
import Cursor from '../components/common/cusor';
import ProgressScroll from '../components/common/ProgressScroll';
import Lines from '../components/common/Lines';
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Wizard IT</title>
        <link rel="icon" href="/dark/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/dark/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/landing-preview/css/preview-style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/satoshi.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
        <script src="/dark/assets/js/scripts.js"></script>
        <script src="/dark/assets/js/smoother-script.js"></script>
      </Helmet>
      <body className="sub-bg">
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        {/* <NavTop /> */}
        <Navbar></Navbar>

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="sub-bg">
              <Outlet />
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
