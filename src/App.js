import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import GeeneearByHtmltodesign from "./pages/GeeneearByHtmltodesign";
import Experts from "./pages/Experts";
import Gradient from "./pages/Gradient";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/experts":
        title = "";
        metaDescription = "";
        break;
      case "/gradient":
        title = "Index";
        metaDescription = "main page";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<GeeneearByHtmltodesign />} />
      <Route path="/experts" element={<Experts />} />
      <Route path="/gradient" element={<Gradient />} />
    </Routes>
  );
}
export default App;
