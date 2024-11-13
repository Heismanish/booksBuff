import React from "react";
import { HPbooks } from "../types/types";
import { Link } from "react-router-dom";

interface hpBooks {
  books: HPbooks;
}

const CardHP: React.FC<hpBooks> = ({ books }) => {
  return (
    <div className="h-[380px] w-[240px] border shadow-md rounded-xl flex flex-col gap-4 overflow-hidden hover:scale-105 transition-transform duration-200">
      <img src={books.cover} className="h-1/2 w-full " />
      <div className="flex justify-between p-2">
        <Link to={books.title}>
          <h1 className="text-xl font-semibold">{books.title}</h1>
        </Link>
        <p className="bg-primary text-secondary rounded-lg p-2 bg-gradient-to-tr from-primary to-accent font-semibold flex items-center justify-center text-wrap h-fit ">
          {books.pages}
        </p>
      </div>
    </div>
  );
};

export default CardHP;
