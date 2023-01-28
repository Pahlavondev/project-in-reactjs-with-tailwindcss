import React from "react";
import { features } from "../util/constants";
import { layout, styles } from "../util/style";
import Button from "./button";
import FeatureCard from "./feature-card";

const Business = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Biznesni rivojlantiring va <br className="sm:block hidden" />
          biz sizga yordam beramiz!
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          tempora maxime. Fuga, repudiandae? Unde saepe iure quis, quidem eos
          minus!
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
