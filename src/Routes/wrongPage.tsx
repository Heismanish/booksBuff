import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { FaArrowRight } from "react-icons/fa";

const WrongPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-12 flex flex-col gap-4 items-center justify-center ">
      <h1 className="text-4xl">OOPS!!</h1>
      <p className="text-xl">Wrong page sir!!</p>

      <Button
        text={
          <div className="flex gap-2 items-center justify-center">
            HOME <FaArrowRight />
          </div>
        }
        action={() => navigate("/")}
      />
    </div>
  );
};

export default WrongPage;
