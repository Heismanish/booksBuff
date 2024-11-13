import { atom } from "recoil";
import { books, HPBooksResponse, upBook } from "../types/types";

const hpBook = atom<HPBooksResponse | []>({
  key: "hpBook",
  default: [],
});

const Books = atom<books>({
  key: "books",
  default: {
    title: "",
    author: "",
    genre: "Other",
    status: "To Read",
    notes: "",
    coverImage: undefined,
  },
});

const CustomBooks = atom<upBook[]>({
  key: "CustomBooks",
  default: [],
});

export { hpBook, Books, CustomBooks };
