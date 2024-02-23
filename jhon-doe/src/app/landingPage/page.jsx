import FeatureButton from "@/components/FeatureButton";
import Header from "@/components/Header";
import Info from "@/components/Info";
import {
  commisionsInfo,
  donationButtonInfo,
  membershipsInfo,
  shopInfo,
} from "@/constants/constants";

const page = () => {
  return (
    <div className="bg-gray-10 h-screen dark:bg-dark   bg-[url('https://storage.ko-fi.com/cdn/landing_assets/kofi_heroimg.png')] bg-no-repeat bg-contain bg-bottom bg-fixed">
      <Header />

      <Info />
      <div className=" absolute w-full h-1/3 bottom-0 left-0">
        <div className="w-full flex sm:px-[120px] px-[20px] lg:px-[165px] justify-between sm:mt-10 mt-20">
          <FeatureButton info={donationButtonInfo} />
          <FeatureButton info={shopInfo} />
        </div>
        <div className="w-full flex sm:px-[140px] px-[50px] lg:px-[195px] justify-between mt-10">
          <FeatureButton info={membershipsInfo} />
          <FeatureButton info={commisionsInfo} />
        </div>
      </div>
    </div>
  );
};

export default page;
