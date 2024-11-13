import React from "react";
import { upBook } from "../types/types";

interface custBook {
  books: upBook;
}

const CardCustom: React.FC<custBook> = ({ books }) => {
  return (
    <div className="h-[380px] w-[240px] border shadow-md rounded-xl flex flex-col gap-4 overflow-hidden hover:scale-105 transition-transform duration-200">
      <img src={books.coverImage} className="h-1/2 w-full " />
      <div className="flex justify-between p-2">
        <h1 className="text-xl font-semibold">{books.title}</h1>
      </div>
    </div>
  );
};

export default CardCustom;
