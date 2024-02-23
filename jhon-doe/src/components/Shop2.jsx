import React from "react";
import ShopEditContainer from "./ShopEditContainer";
import SaveDraft from "./SaveDraft";

const Shop2 = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full sm:justify-center sm:items-start justify-start items-start sm:gap-8 gap-5">
      <ShopEditContainer />
      <SaveDraft />
    </div>
  );
};

export default Shop2;
