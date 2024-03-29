import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="mt-5 pt-5 pb-5 footer text-white">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-xs-12 about-company">
              <h3>ShaGGYY Art</h3>
              <p class="pr-5 text-white-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac ante mollis quam tristique convallis{" "}
              </p>
            </div>
            <div class="col-lg-3 col-xs-12 links">
              <h4 class="mt-lg-0 mt-sm-3">Quike Links</h4>
              <ul class="m-0 p-0 text-white">
                <li>
                  
                  <a className="text-white" href="#">
                    Home
                  </a>
                </li>
                <li>
                  
                  <a href="#" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  
                  <a href="#" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  
                  <a href="#" className="text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-xs-12 location">
              <h4 class="mt-lg-0 mt-sm-4">Location</h4>
              <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
              <p class="mb-0">
                <i class="fa fa-phone mr-3"></i>(541) 754-3010
              </p>
              <p>
                <i class="fa fa-envelope-o mr-3"></i>info@hsdf.com
              </p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col copyright">
              <p class="">
                <small class="text-white-50 ">
                  © 2023. All Rights Reserved by SHaGGY.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Footer;
