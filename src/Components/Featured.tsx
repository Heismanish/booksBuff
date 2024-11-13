import { useEffect } from "react";
import { HPbooks, HPBooksResponseSchema } from "../types/types";
import { useRecoilState } from "recoil";
import { hpBook } from "../Recoil";
import CardHP from "./CardHP";

const API_URL = import.meta.env.VITE_API_URL;

const Featured = () => {
  const [books, setBooks] = useRecoilState<HPbooks[]>(hpBook);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    const parsedData = HPBooksResponseSchema.parse(data);
    setBooks(parsedData);
  };

  return (
    <div className="w-full mb- m:mb-12">
      <h1 className="text-2xl font-bold text-primary  md:mb-4 mb-2">
        Featured <hr className="bg-black " />
      </h1>
      <div className="flex flex-wrap flex-col items-center sm:items-start sm:flex-row gap-8">
        {books.map((book) => (
          <CardHP books={book} key={book.number} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
