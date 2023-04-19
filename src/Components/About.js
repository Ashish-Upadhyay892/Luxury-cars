import React from "react";
import car from "../Images/car.jpg";
import car1 from "../Images/car-free.png";
import car2 from "../Images/bmw.jpg";

function About(props) {
  return (
    <>
      <div className="bg-dark">
        <div className="about-image">
          <div className="overlay2"></div>
          <img src={car} />
        </div>

        <div className="container py-5">
          <div className="row m-0 align-items-center">
            <div className="col-sm-6">
              <div>
                <div className="about-section">
                  <h1>ABOUT COMPANY</h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. There are many variations of passages.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="">
                <img src={car1} className="w-full" />
              </div>
            </div>
          </div>
        </div>

        <section className="section-services">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-10 col-lg-10">
                <div className="header-section">
                  <h2 className="title">Exclusive Services</h2>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur malesuada fermentum purus, eu volutpat nisi
                    laoreet id. Phasellus fringilla accumsan metus, at tempor
                    est hendrerit et.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content1">
                    <span className="icon">
                    <i className="fas fa-oil-can"></i>
                    </span>
                    <h3 className="title">OIL CHANGES</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="#" className="learn-more">
                      Learn More
                    </a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content1">
                    <span className="icon">
                    <i className="far fa-fan"></i>
                    </span>
                    <h3 className="title">AIR CONDITIONING</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="#" className="learn-more">
                      Learn More
                    </a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content1">
                    <span className="icon">
                    <i className="fal fa-plug"></i>
                    </span>
                    <h3 className="title">AUTO ELECTRIC</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="#" className="learn-more">
                      Learn More
                    </a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content1">
                    <span className="icon">
                      <i className="fab fa-500px"></i>
                    </span>
                    <h3 className="title">BRAKE SERVICE</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="#" className="learn-more">
                      Learn More
                    </a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content1">
                    <span className="icon">
                      <i className="fas fa-chart-pie"></i>
                    </span>
                    <h3 className="title">TRANSMISSION</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="#" className="learn-more">
                      Learn More
                    </a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="single-service">
                  <div className="content1">
                    <span className="icon">
                      <i className="fas fa-laptop-code"></i>
                    </span>
                    <h3 className="title">TIRE & WHEEL SERVICE</h3>
                    <p className="description">
                      Mauris volutpat urna tristique finibus iaculis. Morbi
                      facilisis, justo eu vulputate elementum, est augue
                      tincidunt ante, sed efficitur leo ligula vel velit.
                    </p>
                    <a href="#" className="learn-more">
                      Learn More
                    </a>
                  </div>
                  <span className="circle-before"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
