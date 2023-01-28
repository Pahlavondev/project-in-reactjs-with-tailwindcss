import React from "react";
import { styles } from "../util/style";

const ClientCard = ({ logo }) => {
  return (
    <div
      className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
    >
      <img
        className="sm:w-[192px] w-[100px] object-contain"
        src={logo}
        alt="client-logo"
      />
    </div>
  );
};

export default ClientCard;
