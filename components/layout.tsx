import Alert from "./alert";
import Footer from "../components/components/Footer";
import Meta from "./meta";
import Navbar from "../components/components/Navbar";
import Header from "./header";
type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Navbar />
      <Header />
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
