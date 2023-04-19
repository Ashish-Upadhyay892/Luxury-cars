import React from "react";

function Footer(props) {
  return (
    <>
      <footer className=" bg-dull">
        <div className="py-5 text-center">
          <a className="navbar-brand" href="#">
            LEMPO
          </a>
        </div>
        <div className="py-5 container">
          <div className="row m-0">
            <div className="col-sm-4">
              <div className="text-white  font-xl">
                <p>Terms & Condition</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="text-white text-center font-xl">
                <p>2022 Lampo All Right Reserved</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="text-white text-end font-xl">
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
