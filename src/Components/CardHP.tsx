import React, { useState } from "react";
import { HPbooks } from "../types/types";
import { Link } from "react-router-dom";

interface hpBooks {
  books: HPbooks;
}

const CardHP: React.FC<hpBooks> = ({ books }) => {
  const [show, setShow] = useState(false);

  const handleReadMore = () => {
    setShow((prev) => !prev);
  };

  return (
    <div
      className={`h-[480px] w-[280px] border shadow-md ${
        show ? "overflow-y-scroll" : "overflow-hidden"
      } rounded-xl flex flex-col gap-4 $ hover:scale-105 transition-transform duration-200`}
    >
      <img src={books.cover} className="h-1/2 w-full " />
      <div className="text-base flex flex-col  justify-between p-2  overflow-clip gap-2">
        <Link to={books.title}>
          <h1 className="text-xl font-semibold">{books.title}</h1>
        </Link>

        <p className=" text-primary text-wrap h-fit ">
          <span className="font-semibold">{books.pages}</span> pages
        </p>

        <p className="items-start ">
          Released on{" "}
          <span className="text-primary font-semibold">
            {books.releaseDate}
          </span>
        </p>

        <div className={`text-sm `}>
          <p
            id={`description-${books.title}`}
            className={`text-primary transition-all duration-300 ${
              show ? "" : "line-clamp-3"
            }`}
          >
            {books.description}{" "}
          </p>
          <button
            onClick={handleReadMore}
            className="text-blue-600 hover:text-blue-700 duration-300"
          >
            {show ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHP;
