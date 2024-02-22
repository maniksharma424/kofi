import ChevronDown from "@/icons/ChevronDown";
import React from "react";
import CalendarChevron from "./CalendarChevron";
import TablePageSelector from "./TablePageSelector";

const Transactiontable = () => {
  const data = [
    {
      orderId: 1,
      date: "March 13, 2033",
      amount: 100,
      total: 120,
      status: "Pending",
    },
    {
      orderId: 2,
      date: "March 13, 2033",
      amount: 150,
      total: 180,
      status: "Completed",
    },
    {
      orderId: 3,
      date: "March 13, 2033",
      amount: 200,
      total: 240,
      status: "Pending",
    },
    {
      orderId: 4,
      date: "March 13, 2033",
      amount: 250,
      total: 300,
      status: "Completed",
    },
    {
      orderId: 5,
      date: "March 13, 2033",
      amount: 300,
      total: 360,
      status: "Rejected",
    },
  ];
  return (
    <>
      <table className="min-w-full overflow-auto border-[0.5px] border-[#CECECE] rounded-[100px] mt-7">
        <thead className="w-full border-b-[0.5px] border-[#CECECE]">
          <tr className=" w-full text-[#49454FCC]/80 dark:text-gray-10/70 lg:text-[21px] font-[400] sm:text-[16px] text-[9px] ">
            <th className="min-w-1/5 text-start sm:py-4 py-2 lg:px-4 sm:px-3 px-2">
              OrderID
            </th>
            <th className="min-w-1/5 text-start sm:py-4 py-2 lg:px-4 sm:px-3 px-2">
              Date
            </th>
            <th className="min-w-1/5 text-start sm:py-4 py-2 lg:px-4 sm:px-3 px-2">
              Amount
            </th>
            <th className="min-w-1/5 text-start sm:py-4 py-2 lg:px-4 sm:px-3 px-2">
              Total
            </th>
            <th className="min-w-1/5 text-start sm:py-4 py-2 lg:px-4 sm:px-3 px-2">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {data.map((item, index) => (
            <tr
              key={index}
              className="w-full text-primary-text dark:text-gray-10/70 lg:text-[19px] font-[400] sm:text-[15px] text-[6px] hover:bg-[#F3F4F6] dark:hover:bg-gloss-dark"
            >
              <td className="min-w-1/5 text-start sm:py-4 py-2 lg:px-4 sm:px-3 px-2">
                {item.orderId}
              </td>
              <td className="min-w-1/5 text-start sm:py-4 py-2 lg:px-4 sm:px-3 px-2">
                {item.date}
              </td>
              <td className="min-w-1/5 text-start sm:py-4 py-2 lg:px-4 sm:px-3 px-2">
                {item.amount}
              </td>
              <td className="min-w-1/5 text-start sm:py-4 py-2 lg:px-4 sm:px-3 px-2">
                {item.total}
              </td>
              <td
                className={`min-w-1/5 ${
                  item.status === "Rejected"
                    ? "text-red"
                    : item.status === "Completed"
                    ? "text-[#0EAD69]"
                    : "text-[#0978F2]"
                } text-start py-2 px-2`}
              >
                {item.status}
              </td>
            </tr>
          ))}
          <tr className="  h-16 bg-red "></tr>
        </tbody>
      </table>
      <TablePageSelector />
    </>
  );
};

export default Transactiontable;
