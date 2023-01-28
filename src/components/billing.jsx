import React from "react";
import { apple, bill, google } from "../assets";
import { layout, styles } from "../util/style";

const Billing = () => {
  return (
    <section id="features" className={layout.sectionReverse}>
      <div className={layout.sectionImageReverse}>
        <img
          className="w-[100%] h-[100%] relative z-[5]"
          src={bill}
          alt="bill"
        />

        {/* Gradient Background */}
        <div className="absolute z-[3] -left-1/2 w-[50%] h-[55%] rounded-full top-0 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 rounded-full bottom-0 pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Hisob-kitob va fakturial <br className="sm:block hidden" /> osongina
          boshqaring.
        </h2>

        <p className={`${styles.paragraph}  max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          consectetur recusandae quasi culpa aut ullam vero et voluptatum maxime
          ut!
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            className="w-[130px] h-[45px] object-contain mr-5 cursor-pointer"
            src={google}
            alt="google"
          />

          <img
            className="w-[130px] h-[45px] object-contain mr-0 cursor-pointer"
            src={apple}
            alt="apple"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
