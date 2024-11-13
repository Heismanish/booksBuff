import Custom from "../Components/Custom";
import Featured from "../Components/Featured";

const Home = () => {
  return (
    <div className="mx-auto w-full max-w-[1360px] md:p-4 p-2">
      <Featured />
      <Custom />
    </div>
  );
};

export default Home;
