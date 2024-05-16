import React from "react";

import banner1 from "../assets/images/banner-1.png";
import banner2 from "../assets/images/banner-2.png";

import graphdown from "../assets/svg/graph-down.svg";
import thunder from "../assets/svg/thunder.svg";
import lock from "../assets/svg/lock.svg";

const Banner1 = () => {
  return (
    <>
      <section className="banner-container">
        <div className="img-box" data-reveal="left">
          <img src={banner2} alt="" />
        </div>
        <div className="content-box ">
          <h3 className="heading" data-reveal="left">
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <p className="content-text" data-reveal="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus veritatis eveniet impedit nulla, ab reiciendis! Porro,
            magnam, officia quam nemo velit et non accusamus quae soluta
            molestiae recusandae dolores ab dolorem ullam itaque, saepe sunt.
          </p>
          <div className="btn-box box-1">
            <button>Explore</button>
            <button>View More</button>
          </div>
        </div>


        <div className="content-box ct-box-2">
          <h3 className="heading" data-reveal="right">
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <p className="content-text" data-reveal="right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus veritatis eveniet impedit nulla, ab reiciendis! Porro,
            magnam, officia quam nemo velit et non accusamus quae soluta
            molestiae recusandae dolores ab dolorem ullam itaque, saepe sunt.
          </p>
          <div className="btn-box box-2">
            <button>Explore</button>
            <button>View More</button>
          </div>
        </div>
        <div className="img-box" data-reveal="right">
          <img src={banner1} alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner1;
