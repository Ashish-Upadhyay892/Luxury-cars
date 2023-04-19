import React from "react";
import Select from "react-select";
import car2 from "../Images/bmw.jpg";
import car3 from "../Images/car.jpg";
import car5 from "../Images/image1.jpg";
import car6 from "../Images/image2.jpg";

function Collection(props) {
  const media_urls = [
    {
      id: 1,
      title: "MERCEDES-BENZ C-CLASS 2015",
      category: "Automatic",
      fuel: "Petrol",
      image: car2,
    },
    {
      id: 2,
      title: "NISSAN ALTIMA 2019",
      category: "Automatic",
      fuel: "Diesel",
      image: car3,
    },
    {
      id: 3,
      title: "Tesla Roadster 2021",
      category: "Automatic",
      fuel: "Petrol",
      image: car5,
    },
    {
      id: 4,
      title: "MERCEDES-BENZ C-CLASS 2015",
      category: "Automatic",
      fuel: "Petrol",
      image: car2,
    },
    {
      id: 5,
      title: "NISSAN ALTIMA 2019",
      category: "Automatic",
      fuel: "Diesel",
      image: car3,
    },
    {
      id: 6,
      title: "Tesla Roadster 2021",
      category: "Automatic",
      fuel: "Petrol",
      image: car5,
    },
  ];
  return (
    <>
      <section className="bg-dark">
        <div className="about-image ">
          <div className="overlay2"></div>
          <img src={car2} />
        </div>

        <div className="container py-5">
          <h3 className="Head-colleaction mb-5">Cars Collection</h3>
          <div className="row m-0">
            {media_urls.map((media) => (
              <div key={media.id} className="col-lg-4 col-sm-6 mb-4">
                <div className="product-card">
                  <div>
                    <img src={media.image} alt="" />
                  </div>
                  <div className="product-details">
                    <p>{media.title}</p>
                    <div className="meta-middle">
                      <div className="meta-middle-unit font-exists mileage">
                        <div className="meta-middle-unit-top">
                          <div className="icon">
                            <i className="fas fa-road"></i>
                          </div>
                          <div className="name">Mileage</div>
                        </div>

                        <div className="value h5">100 </div>
                      </div>

                      <div className="meta-middle-unit font-exists fuel">
                        <div className="meta-middle-unit-top">
                          <div className="icon">
                            <i className="fas fa-gas-pump"></i>
                          </div>
                          <div className="name">Fuel type</div>
                        </div>

                        <div className="value h5">Hybrid </div>
                      </div>

                      <div className="meta-middle-unit font-exists transmission">
                        <div className="meta-middle-unit-top">
                          <div className="icon">
                            <i className="fas fa-tire"></i>
                          </div>
                          <div className="name">Transmission</div>
                        </div>

                        <div className="value h5">Automatic </div>
                      </div>

                      <div className="meta-middle-unit font-exists ca-year">
                        <div className="meta-middle-unit-top">
                          <div className="icon">
                            <i className="far fa-calendar-alt"></i>
                          </div>
                          <div className="name">Year</div>
                        </div>

                        <div className="value h5">2015 </div>
                      </div>
                      <div className="meta-middle-unit font-exists drive">
                        <div className="meta-middle-unit-top">
                          <div className="icon">
                            <i className="far fa-steering-wheel"></i>
                          </div>
                          <div className="name">Drive</div>
                        </div>

                        <div className="value h5">4WD </div>
                      </div>
                    </div>
                  </div>
                  <div className="row m-0">
                    <div className="col">
                      <p className="price-cars">$ 400,000</p>
                    </div>
                    <div className="col text-end">
                      <button className="btn btn-sine-1 ">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center pb-5">
          <button className="btn btn-sine px-5 py-3">Load more</button>
        </div>
      </section>
    </>
  );
}

export default Collection;
