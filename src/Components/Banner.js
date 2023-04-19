import React from "react";
import image2 from "../Images/image2.jpg";
import image11 from "../Images/image11.jpg";
import vide1 from "../assets/vide1.mp4";
import videoBg from "../assets/vidbg.mp4";

import vide2 from "../assets/vide2.mp4";
function Banner(props) {
  // handle mouse enter
  const handleMouseEnter = (e) => {
    const vid = e.target;
    vid.muted = true;
    vid.play();
  };

  // handle mouse leave
  const handleMouseLeave = (e) => {
    const vid = e.target;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
  };

  return (
    <div className=" bg-dark">
      <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="banner-image  py-5">
          <p> The Luxuary Car</p>
        </div>
      </div>
      <div className="container">
        <div className="second-para">
          <p>
            DON'T LET THE SADNESS FROM THE PAST AND THE FEAR OF THE FUTURE, RUIN
            THE HAPPINESS OF THE PRESENT
          </p>
        </div>
        <hr className="text-white" />
        <p className="box-text">
          {" "}
          Contrary to popular belief, Lorem Ipsurn is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC. making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consedetur, from a Lorem Ipsum passage, and going through
          the cites of the word in classical literature. discover. the
          undoubtable source. Lorem Irwin comes from secttons 1.10.32 a. L10.33
          of 'de Finibus Donor.. 441 CC] (The Extremes of Good and Evil) by
          Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem
          Ipsum, l_orem ipsum dolor sit am..., comes from a line in section
          1.10.32.{" "}
        </p>
        <hr className="text-white" />
        <p className="box-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteratton In some form, by inject. humour,
          or randomised words which dont look even slightly Thlievable. If you
          are going to use a passage of harem Ipsum. you need to be sure there
          is. anything embarrassing hidden in the middle of text. All the Lorern
          Ipsum generators on The Internet tend to repeat predefined chunks as
          necescary making this the first true generator on the Internet{" "}
        </p>
      </div>
      <div className="row m-0 py-5">
        <div className="col-sm-6  p-0">
          <div className="container1">
            <video
              className="image1"
              loop
              muted
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <source src={vide2} type="video/mp4" />
            </video>

            <div className="overlay1">
              <div className="text1">drifting in through a quiet window</div>
            </div>
          </div>
        </div>
        <div className="col-sm-6  p-0">
          <div className="container1">
            <video
              className="image1"
              loop
              muted
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <source src={vide1} type="video/mp4" />
            </video>

            <div className="overlay1">
              <div className="text1">Cars bring me sheer joy.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-para text-center">
        <p>WE ARE THE LEADERS IN THE AUTOMOTIVE INDUSTRY</p>
      </div>
      <hr className="text-white" />

      <div className="container">
        <div className="row m-0 py-5">
          <div className="col-sm-4">
            <div className="counter-section">
              <p>
                Lorem ipsum dolor sit amet , <br /> consectetur adipisicing
                elit.
              </p>
              <h1>290+</h1>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="counter-section">
              <p>
                Lorem ipsum dolor sit amet , <br /> consectetur adipisicing
                elit.
              </p>
              <h1>20+</h1>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="counter-section">
              <p>
                Lorem ipsum dolor sit amet , <br /> consectetur adipisicing
                elit.
              </p>
              <h1>$20k+</h1>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-white" />

      <div className="container py-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-5">
            <div className="second-para-1">
              <p>CHECK OUR COLLECTIONS</p>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="para-box">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores, beatae. Vero labore dicta nulla aspernatur
                praesentium distinctio at delectus laborum, officia consequuntur
                accusamus tempora qui voluptatum fugit tempore deleniti ullam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-white" />
      <div className="container py-5">
        <div className="lettalk">
          <h1>Let's Talk For Your New Car</h1>
        </div>
        <div className="text-center button-box py-5">
          <button className="btn btn-sine px-5 py-3">TALK NOW</button>
          <button className="btn btn-sine px-5 py-3">FOLLOW US</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
