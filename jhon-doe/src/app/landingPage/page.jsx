import Header from "@/components/Header";
import Info from "@/components/Info";
import Rect from "@/components/Rect";

const page = () => {
  return (
    <div className="bg-gray-10 h-screen dark:bg-dark ">
      <Header />

      <Info />

      {/* <Rect width={"100%"} height={"100%"} /> */}
    </div>
  );
};

export default page;
