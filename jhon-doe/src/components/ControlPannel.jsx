import { Play, Settings, SkipForward, Volume1 } from "lucide-react";
import React from "react";

const ControlPannel = () => {
  return (
    <div
      className={`controls  pb-2 w-full h-fit  custom-control-panel   rounded-b-md  flex  flex-col justify-between text-white items-center   bg-black/10 mt-2`}
    >
      <input
        aria-label="Range playback for the current video  "
        className={`w-full    accent-red-500 cursor-pointer`}
        type="range"
        min="0"
        max="100"
      />
      <div
        className={` w-[calc(95%)] transition-opacity flex mt-2 items-center justify-between`}
      >
        <div className="flex justify-start items-center sm:gap-8 gap-2">
          <div className="cursor-pointer">
            <Play fill="white" className="sm:w-5 sm:h-5  w-3 h-3" />
          </div>
          <div className="cursor-pointer">
            {<SkipForward fill="white" className="sm:w-6 sm:h-6  w-3 h-3" />}
          </div>
          <span className="sm:min-w-[80px] min-w-[50px] sm:text-[16px] text-[10px]">
            00:00
          </span>

          <div className="mute-btn flex justify-start items-center sm:gap-3 gap-1 cursor-pointer">
            <Volume1 fill="white" className="sm:w-6 sm:h-6  w-3 h-3" />

            <input
              className="cursor-pointer sm:block hidden animate-volume"
              aria-label="Range for volume control"
              type="range"
              min="0"
              max="1"
              step="0.01"
            />
          </div>
        </div>
        <div className="flex justify-end items-center sm:gap-8 gap-2">
          <div className="relative cursor-pointer">
            <Settings className="sm:w-6 sm:h-6  w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPannel;
