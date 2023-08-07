import { memo } from "react";
import "./BlogContainer.css";
const BlogContainer = memo(() => {
  return (
    <div className="divheader-outer">
      <div className="header">
        <div className="divcol1">
          <div className="link-geenee-logo2021-3svg">
            <img
              className="geenee-logo2021-3svg-icon"
              alt=""
              src="/geeneelogo20213svg.svg"
            />
          </div>
        </div>
        <div className="divcol2">
          <div className="nav">
            <div className="list4">
              <div className="item">
                <b className="link-ar">AR Commerce</b>
              </div>
              <div className="item1">
                <b className="link-ar">Use Cases</b>
              </div>
              <div className="item2">
                <b className="link-ar">Studio Services</b>
              </div>
              <div className="item3">
                <b className="link-ar">Builder</b>
              </div>
              <div className="item4">
                <b className="link-ar">SDK</b>
              </div>
              <div className="item1">
                <b className="link-ar">Blog</b>
              </div>
            </div>
            <div className="list-item1">
              <div className="link6">
                <div className="pseudo5" />
                <b className="contact-us">CONTACT US</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default BlogContainer;
