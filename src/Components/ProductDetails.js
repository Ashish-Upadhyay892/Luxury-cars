import React from "react";
import car2 from "../Images/bmw.jpg";
import car3 from "../Images/car.jpg";
import car5 from "../Images/image1.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function ProductDetails(props) {
  return (
    <>
      <div className="about-image ">
        <div className="overlay2"></div>
        <img src={car2} />
      </div>
      <div className="bg-dark">
        <div className="container">
          <div className="row d-flex justify-content-center pt-5">
            <div className="col-md-9">
              <div
                id="myCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                align="center"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={car2} className="rounded" />
                  </div>
                  <div className="carousel-item">
                    <img src={car3} className="rounded" />
                  </div>
                  <div className="carousel-item">
                    <img src={car5} className="rounded" />
                  </div>
                </div>

                <ol className="carousel-indicators list-inline">
                  <li className="list-inline-item active">
                    <a
                      id="carousel-selector-0"
                      className="selected"
                      data-bs-slide-to="0"
                      data-bs-target="#myCarousel"
                    >
                      <img src={car2} className="img-fluid rounded" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      id="carousel-selector-1"
                      data-bs-slide-to="1"
                      data-bs-target="#myCarousel"
                    >
                      <img src={car3} className="img-fluid rounded" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      id="carousel-selector-2"
                      data-bs-slide-to="2"
                      data-bs-target="#myCarousel"
                    >
                      <img src={car5} className="img-fluid rounded" />
                    </a>
                  </li>
                </ol>
              </div>
              <div className="description-section">
                <Tabs
                  defaultActiveKey="home"
                  id="fill-tab-example"
                  className="mb-3"
                  fill
                >
                  <Tab eventKey="home" title="Vehicle overview">
                    <div className="vehicleoverview">
                      <h4>
                        Quisque imperdiet dignissim enim dictum finibus. Sed
                        consectetutr convallis enim eget laoreet. Aenean vitae
                        nisl mollis, porta risus vel, dapibus lectus. Etiam ac
                        suscipit eros, eget maximus
                      </h4>
                      <p>
                        Etiam sit amet ex pharetra, venenatis ante vehicula,
                        gravida sapien. Fusce eleifend vulputate nibh, non
                        cursus augue placerat pellentesque. Sed venenatis risus
                        nec felis mollis, in pharetra urna euismod. Morbi
                        aliquam ut turpis sit amet ultrices. Vestibulum mattis
                        blandit nisl, et tristique elit scelerisque nec. Fusce
                        eleifend laoreet dui eget aliquet. Ut rutrum risus et
                        nunc pretium scelerisque. Fusce viverra, ligula quis
                        pellentesque interdum, leo felis congue dui, ac accumsan
                        sem nulla id lorem. Praesent ut tristique dui, nec
                        condimentum lacus. Maecenas lobortis ante id egestas
                        placerat. Nullam at ultricies lacus. Nam in nulla
                        consectetur, suscipit mauris eu, fringilla augue.
                        Phasellus gravida, dui quis dignissim tempus, tortor
                        orci tristique leo, ut congue diam ipsum at massa.
                        Pellentesque ut vestibulum erat. Donec a felis eget
                      </p>
                      <p>
                        Maecenas lobortis ante id egestas placerat. Nullam at
                        ultricies lacus. Nam in nulla consectetur, suscipit
                        mauris eu, fringilla augue. Phasellus gravida, dui quis
                        dignissim tempus, tortor orci tristique leo, ut congue
                        diam ipsum at massa. Pellentesque ut vestibulum erat.
                        Donec a felis eget tellus laoreet ultrices.
                      </p>

                      <div>
                        <h4 className="mt-5 mb-3">
                          <b> EXTRA FEATURES </b>
                        </h4>
                        <div className="lists-inline">
                          <ul className="list-style-2">
                            <li>
                              <span>Auxiliary heating</span>
                            </li>
                            <li>
                              <span>Bluetooth</span>
                            </li>
                            <li>
                              <span>CD player</span>
                            </li>
                            <li>
                              <span>Central locking</span>
                            </li>
                          </ul>
                          <ul className="list-style-2">
                            <li>
                              <span>Head-up display</span>
                            </li>
                            <li>
                              <span>MP3 interface</span>
                            </li>
                            <li>
                              <span>Navigation system</span>
                            </li>
                            <li>
                              <span>Panoramic roof</span>
                            </li>
                          </ul>
                          <ul className="list-style-2">
                            <li>
                              <span>Alloy wheels</span>
                            </li>
                            <li>
                              <span>Electric side mirror</span>
                            </li>
                            <li>
                              <span>Sports package</span>
                            </li>
                            <li>
                              <span>Sports suspension</span>
                            </li>
                          </ul>
                          <ul className="list-style-2">
                            <li>
                              <span>MP3 interface</span>
                            </li>
                            <li>
                              <span>Navigation system</span>
                            </li>
                            <li>
                              <span>Panoramic roof</span>
                            </li>
                            <li>
                              <span>Parking sensors</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Technical">
                    <div className="stm-tech-infos">
                      <div className="stm-tech-title">
                        <div className="title h5 text-white">
                          <h3 className="mb-3 mt-5">
                            <i className="fas fa-oil-can me-3"></i>
                            Engine
                          </h3>
                        </div>
                      </div>

                      <div className="single-car-data">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <span className="text-transform ">
                                  Layout/number of cylinders
                                </span>
                              </td>
                              <td className="text-end">
                                <span className="h6">11 700 ml </span>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <span className="text-transform ">
                                  Displacement
                                </span>
                              </td>
                              <td className="text-end">
                                <span className="h6">2015 </span>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <span className="text-transform ">
                                  Engine layout
                                </span>
                              </td>
                              <td className="text-end">
                                <span className="h6">RWD </span>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <span className="text-transform ">
                                  Horespower
                                </span>
                              </td>
                              <td className="text-end">
                                <span className="h6">1.8L cyls </span>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <span className="text-transform ">@ rpm </span>
                              </td>
                              <td className="text-end">
                                <span className="h6">266 lb.-ft. </span>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <span className="text-transform ">Torque </span>
                              </td>
                              <td className="text-end">
                                <span className="h6">12.5 : 1 </span>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <span className="text-transform ">
                                  Compression ratio
                                </span>
                              </td>
                              <td className="text-end">
                                <span className="h6">Gasoline </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="stm-tech-infos">
                      <div className="stm-tech-title">
                        <div className="title h5 text-white">
                          <h3 className="mb-3 mt-5">
                            <i className="far fa-tachometer-alt-slow me-3"></i>
                            Performance
                          </h3>
                        </div>
                      </div>

                      <div className="single-car-data">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <span className="text-transform ">
                                  Top Track Speed
                                </span>
                              </td>
                              <td className="text-end">
                                <span className="h6">173 mph </span>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <span className="text-transform ">
                                  0 - 70 mph
                                </span>
                              </td>
                              <td className="text-end">
                                <span className="h6">4.8 s </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="stm-tech-infos">
                      <div className="stm-tech-title">
                        <div className="title h5 text-white">
                          <h3 className="mb-3 mt-5">
                            <i className="far fa-cogs me-3"></i>
                            Transmission
                          </h3>
                        </div>
                      </div>

                      <div className="single-car-data">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <span className="text-transform ">type </span>
                              </td>
                              <td className="text-end">
                                <span className="h6">Automatic </span>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <span className="text-transform ">
                                  Displacement
                                </span>
                              </td>
                              <td className="text-end">
                                <span className="h6">6 Speed </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="features" title="Features & Options">
                    <div className="vehicleoverview">
                      <div className="row m-0 mt-5">
                        <div className="col-sm-6">
                          <div className="features-option">
                            <h4 className="">Nulla consequat enim.</h4>
                            <div className="">
                              <div className="">
                                <ul className="list-style-3">
                                  <li>
                                    Pellentesque lacus urna, feugiat non
                                    consectetur nec.
                                  </li>
                                  <li>
                                    Aliquam sem neque, efficitur atero lectus
                                    vitae.
                                  </li>
                                  <li>
                                    Pellentesque erat libero, eleifend sit amet
                                    felis ido.
                                  </li>
                                  <li>
                                    Maecenas eget consectetur quam. Vestibulum
                                    ligula.
                                  </li>
                                  <li>
                                    Praesent lorem sapien, vestibulum eget
                                    aliquet et.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="features-option">
                            <h4 className="">Consequat massa</h4>
                            <div className="">
                              <div className="">
                                <ul className="list-style-3">
                                  <li>
                                    Pellentesque lacus urna, feugiat non
                                    consectetur nec.
                                  </li>
                                  <li>
                                    Aliquam sem neque, efficitur atero lectus
                                    vitae.
                                  </li>
                                  <li>
                                    Pellentesque erat libero, eleifend sit amet
                                    felis ido.
                                  </li>
                                  <li>
                                    Maecenas eget consectetur quam. Vestibulum
                                    ligula.
                                  </li>
                                  <li>
                                    Praesent lorem sapien, vestibulum eget
                                    aliquet et.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="mt-5 mb-3">
                          <b> EXTRA FEATURES </b>
                        </h4>
                        <div className="lists-inline">
                          <ul className="list-style-2">
                            <li>
                              <span>Auxiliary heating</span>
                            </li>
                            <li>
                              <span>Bluetooth</span>
                            </li>
                            <li>
                              <span>CD player</span>
                            </li>
                            <li>
                              <span>Central locking</span>
                            </li>
                          </ul>
                          <ul className="list-style-2">
                            <li>
                              <span>Head-up display</span>
                            </li>
                            <li>
                              <span>MP3 interface</span>
                            </li>
                            <li>
                              <span>Navigation system</span>
                            </li>
                            <li>
                              <span>Panoramic roof</span>
                            </li>
                          </ul>
                          <ul className="list-style-2">
                            <li>
                              <span>Alloy wheels</span>
                            </li>
                            <li>
                              <span>Electric side mirror</span>
                            </li>
                            <li>
                              <span>Sports package</span>
                            </li>
                            <li>
                              <span>Sports suspension</span>
                            </li>
                          </ul>
                          <ul className="list-style-2">
                            <li>
                              <span>MP3 interface</span>
                            </li>
                            <li>
                              <span>Navigation system</span>
                            </li>
                            <li>
                              <span>Panoramic roof</span>
                            </li>
                            <li>
                              <span>Parking sensors</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="contact" title="Contact">
                    <div className="text-white">
                      <div className="row mt-5">
                        <div className="col-sm-4 ">
                          <div>
                            <h4 class="title heading-font mb-3">
                              <i class="far fa-envelope-open-text me-3 "></i>
                              Contact Information
                            </h4>
                            <p className="mb-3">
                              This vehicle has been inspected by an authorized
                              Mercedes-Benz dealer or service partner and
                              includes additional services.
                            </p>
                            <div className="address-box">
                              <p>
                                <i class="fas fa-location me-3"></i>
                                1840 E Garvey Ave South West Covina, CA 91791
                              </p>
                              <p>
                                <i class="fas fa-phone-alt me-3"></i>
                                888-694-5544
                              </p>
                              <p>
                                <i class="far fa-envelope-open-text me-3 "></i>
                                Sales@cardealer.com
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <h4 class="title heading-font mb-3">
                            <i class="fas fa-paper-plane me-3"></i>
                            Message to Vender
                          </h4>
                          <div class="row m-0">
                            <div class="col-md-6 col-sm-6">
                              <div class="form-group">
                                <div class="form-label">Your Name:</div>
                                <input
                                  type="text"
                                  name="your-name"
                                  value=""
                                  class="form-control text validates-as-required mb-3"
                                  aria-required="true"
                                  aria-invalid="false"
                                />
                              </div>
                              <div class="form-group">
                                <div class="form-label">
                                  Your telephone number:
                                </div>
                                <input
                                  type="tel"
                                  name="your-tel"
                                  value=""
                                  class=" mb-3 form-control text tel validates-as-required validates-as-tel"
                                  aria-required="true"
                                  aria-invalid="false"
                                />
                              </div>
                              <div class="form-group">
                                <div class="form-label">Email:</div>
                                <input
                                  type="email"
                                  name="your-email"
                                  value=""
                                  class=" mb-3 form-control text email validates-as-required validates-as-email"
                                  aria-required="true"
                                  aria-invalid="false"
                                />
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                              <div class="form-group-textarea">
                                <div class="form-label">Your Message</div>
                                <span class="form-control-wrap your-message">
                                  <textarea
                                    name="your-message"
                                    cols="40"
                                    rows="5"
                                    class="form-control textarea"
                                    aria-invalid="false"
                                  >
                                    I am interested in a price quote on this
                                    vehicle. Please contact me at your earliest
                                    convenience with your best price for this
                                    vehicle.
                                  </textarea>
                                </span>
                              </div>

                              <input
                                type="submit"
                                value="Submit"
                                class="form-control has-spinner submit mt-3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className="col-md-3">
              <div className="wpb_wrapper">
                <div className="single-car-prices">
                  <div className="single-regular-sale-price">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div className="regular-price-with-sale">
                              Our price <strong>$25 000 </strong>
                            </div>
                          </td>
                          <td>
                            MSRP <div className="h4">$18 000</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="sale-price-description-single">
                  Instant Savings: <strong> $7 000</strong>
                </div>

                <div className="stm-car_dealer-buttons heading-font">
                  <div className="whatsapp">
                    <a
                      href="#"
                      target="_blank"
                      className="external"
                      rel="nofollow"
                    >
                      <div
                        className="whatsapp-btn heading-font "
                        id="social_button_38467"
                      >
                        <i className="fab fa-whatsapp"></i>
                        Chat via WhatsApp
                      </div>
                    </a>
                  </div>
                </div>

                <div className="stm-car_dealer-buttons heading-font">
                  <a
                    href="#trade-in"
                    data-toggle="modal"
                    data-target="#trade-in"
                  >
                    Trade in form <i className="fas fa-exchange-alt"></i>
                  </a>

                  <a
                    href="#trade-offer"
                    data-toggle="modal"
                    data-target="#trade-offer"
                  >
                    Make an offer price <i className="fas fa-rupee-sign"></i>
                  </a>
                </div>

                <div className="single-car-data">
                  <div className="stm_cargurus_wrapper cg_style">
                    <span data-cg-vin="1N4AL3AP9JC110883" data-cg-price="18000">
                      <span data-cg-error="no information"></span>
                    </span>
                  </div>

                  <table>
                    <tbody>
                      <tr>
                        <td className="t-label">Body</td>
                        <td className="t-value h6">Sedan</td>
                      </tr>
                      <tr>
                        <td className="t-label">Mileage</td>
                        <td className="t-value h6">18000</td>
                      </tr>
                      <tr>
                        <td className="t-label">Fuel type</td>
                        <td className="t-value h6">Gasoline</td>
                      </tr>
                      <tr>
                        <td className="t-label">Year</td>
                        <td className="t-value h6">2019</td>
                      </tr>
                      <tr>
                        <td className="t-label">Transmission</td>
                        <td className="t-value h6">Automatic</td>
                      </tr>
                      <tr>
                        <td className="t-label">Drive</td>
                        <td className="t-value h6">AWD</td>
                      </tr>
                      <tr>
                        <td className="t-label">Fuel economy</td>
                        <td className="t-value h6">15.3</td>
                      </tr>
                      <tr>
                        <td className="t-label">Exterior Color</td>
                        <td className="t-value h6">Red Multi-Coat</td>
                      </tr>
                      <tr>
                        <td className="t-label">Interior Color</td>
                        <td className="t-value h6">Jet Black</td>
                      </tr>

                      <tr>
                        <td className="t-label">VIN</td>
                        <td className="t-value t-vin h6">1N4AL3AP9JC110883</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
