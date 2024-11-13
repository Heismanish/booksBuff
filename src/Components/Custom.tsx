import { useRecoilState } from "recoil";
import { upBook } from "../types/types";
import CustomCard from "./CustomCard";
import { CustomBooks } from "../Recoil";
import { useEffect } from "react";

const Custom = () => {
  const [books, setBooks] = useRecoilState<upBook[] | []>(CustomBooks);

  useEffect(() => {
    const localBook = JSON.parse(localStorage.getItem("booksArr") || "[]");
    setBooks(localBook);
  }, []);

  return (
    <div className="w-full ">
      <h1 className="text-2xl font-bold text-primary  md:mb-4 mb-2">
        Custom <hr className="bg-black " />
      </h1>

      <div className="flex flex-wrap flex-col items-center sm:items-start sm:flex-row gap-8">
        {books.map((book, idx) => (
          <CustomCard books={book} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Custom;
