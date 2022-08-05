import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => (
  <>
    <Header/>
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&family=Splash&family=Tapestry&display=swap"
      rel="stylesheet"/>
    {children}
    <Footer/>
  </>
)

export default Layout;