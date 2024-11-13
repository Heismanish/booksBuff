import React, { useEffect, useRef, useState } from "react";
import { upBook } from "../types/types";
import { Link } from "react-router-dom";

interface custBook {
  books: upBook;
}

const CardCustom: React.FC<custBook> = ({ books }) => {
  const [show, setShow] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        setIsOverflowing(
          descriptionRef.current.scrollHeight >
            descriptionRef.current.clientHeight
        );
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const handleReadMore = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="h-[380px] w-[240px] border shadow-md rounded-xl flex flex-col gap-4 overflow-hidden hover:scale-105 transition-transform duration-200">
      <img
        src={books.coverImage}
        alt={`${books.title} cover`}
        className="h-1/2 w-full"
      />
      <div className="text-base flex flex-col justify-between px-2 pb-2 overflow-clip gap-2">
        <Link to={books.title}>
          <h1 className="text-xl font-semibold">{books.title}</h1>
        </Link>

        <p className="text-primary text-wrap h-fit">
          Status: <span className="font-semibold">{books.status}</span>
        </p>

        <p className="items-start">
          Author:{" "}
          <span className="text-primary font-semibold">{books.author}</span>
        </p>

        <div className="text-sm">
          <p
            ref={descriptionRef}
            className={`text-primary transition-all duration-300 ${
              show ? "max-h-full" : "line-clamp-3"
            }`}
          >
            {books.notes}
          </p>

          {isOverflowing && (
            <button
              onClick={handleReadMore}
              className="text-blue-600 hover:text-blue-700 duration-300"
            >
              {show ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCustom;
