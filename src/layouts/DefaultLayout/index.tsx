import Footer from "./Footer";
import Header from "./Header";

function DefaultLayout({ children }) {
  return (
    <div className="bg-while-240">
      <div className="flex justify-center bg-white">
        <Header />
      </div>

      <div className="flex justify-center">{children}</div>

      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
