/**
 * @copyright Sadeep Jayashanka
 * @license Apache-2.0
 */

import React from "react";

const Hero = () => {
  return (
    <section id="Home" className="">
      <div className="">
        <div>
          <div className="">
            <figure className="">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="Sadeep Jayashanka protrait"
                l
                className="img-cover"
              />
            </figure>
            <div className="">
              <span className="">
                <span className=""></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="">Building Scalable Modern Websites for the Future</h2>
          <div className="">ButtonPrimary ButtonOutline</div>
        </div>
        <div className="">
          <figure className="">
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Sadeep Jayashanka"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
