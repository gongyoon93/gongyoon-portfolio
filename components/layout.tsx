import Footer from "./footer";
import Header from "./header";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children }: WrapperProps) => {
  return (
    <div className="bg-primary">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
