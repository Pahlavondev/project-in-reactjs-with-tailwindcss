import React from "react";
import { feedbacks } from "../util/constants";
import { styles } from "../util/style";
import FeedbackCard from "./feedback-card";

const Testimonials = () => {
  return (
    <div
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div
        className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative 
      z-[1]"
      >
        <h2 className={styles.heading2}>
          Odamlar biz haqimizda qanday fikrda?
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left  max-w-[550px]`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem doloremque dolorem, in quis vel unde!
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={feedback.id} {...feedback} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
