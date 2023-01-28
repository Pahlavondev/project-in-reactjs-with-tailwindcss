import React from "react";
import { statistics } from "../util/constants";
import { styles } from "../util/style";

const Statistics = () => {
  return (
    <div className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
      {statistics.map((statistic) => (
        <div
          key={statistic.id}
          className={"flex-1 flex justify-start items-center flex-row m-3"}
        >
          <h4
            className="font-montserrat font-semibold xs:text-[41px] text-[30px] xs:leading-[53px] 
          leading-[43px] text-white"
          >
            {statistic.value}
          </h4>

          <p className="font-montserrat font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[22px] text-gradient uppercase ml-3">
            {statistic.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
