import React from "react";
import UserSettinPannel from "./UserSettingPannel";
import EarningCard from "./EarningCard";
import Pendingcard from "./Pendingcard";
import WithdrawCard from "./WithdrawCard";
import TransactionFilterButtons from "./TransactionFilterButtons";
import Transactiontable from "./Transactiontable";

const TransactionHistory = () => {
  return (
    <div className="w-full">
      <p className="sm:w-fit w-full sm:text-start text-center text-primary-text text-[30px] font-[400] dark:text-gray-10">
        Setting
      </p>
      <UserSettinPannel />
      <div className="w-full grid sm:grid-cols-3 grid-col-1 sm:gap-4 gap-3 mt-5">
        <EarningCard />
        <Pendingcard />
        <WithdrawCard />
      </div>
      <div className=" w-full">
        <TransactionFilterButtons />
        <Transactiontable />
      </div>
    </div>
  );
};

export default TransactionHistory;
