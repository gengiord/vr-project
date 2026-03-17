import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ section, children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="site-layout">
      <Navbar section={section} />
      <main className="site-main">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
