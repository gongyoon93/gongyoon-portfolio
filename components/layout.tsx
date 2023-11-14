import Footer from "./footer";
import Header from "./header";

type WrapperProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: WrapperProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
