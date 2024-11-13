import { useRecoilState } from "recoil";
import bookSideLogo from "../assets/bookSideLogo.png";
import { Books } from "../Recoil";
import { books, bookSchema } from "../types/types";
import { ChangeEvent, useState } from "react";
import { ZodError } from "zod";

const CLOUDINARY_UPLOAD_URL = import.meta.env.VITE_CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const AddBook = () => {
  const [book, setBook] = useRecoilState<books>(Books);
  const [error, setError] = useState<ZodError<books>>();
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookSchema.safeParse(book);
    if (!book.coverImage) {
      setError(
        new ZodError([
          {
            code: "custom",
            message: "Cover image is required",
            path: ["coverImage"],
          },
        ])
      );
      return;
    }

    if (result.success) {
      alert(JSON.stringify(book));
      await uploadImage(book.coverImage);
      setError(undefined);
    } else {
      setError(result.error);
    }
  };

  // Image upload handler
  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBook({ ...book, coverImage: file });

      setCoverPreview(URL.createObjectURL(file));
    }
  };

  // Cloudinary upload function
  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(CLOUDINARY_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.secure_url) {
        setBook((prevBook) => ({ ...prevBook, coverImage: data.secure_url }));

        let prevLocal = JSON.parse(localStorage.getItem("booksArr") || "[]");

        prevLocal.push({ ...book, coverImage: data.secure_url });

        localStorage.setItem("booksArr", JSON.stringify(prevLocal));
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1360px] md:p-4 p-2 ">
      <h1 className="text-3xl font-bold text-primary ">
        Add your book <hr className="shadow-xl" />
      </h1>

      <div className="flex justify-around my-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:gap-6 gap-4 max-w-[600px] flex-grow  "
        >
          <input
            name="Title of the book"
            type="text"
            aria-label="Title of the book"
            aria-autocomplete="both"
            placeholder="Name of the book"
            className="px-4 py-2 rounded-md bg-white border-primary border-2 outline-accent"
            value={book.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setBook({ ...book, title: e.target.value });
              console.log(e.target.value);
            }}
          />

          <input
            name="Author of the book"
            aria-label="Author of the book"
            aria-autocomplete="both"
            type="text"
            placeholder="Author of the book"
            className="px-4 py-2 rounded-md bg-white border-primary border-2 outline-accent"
            value={book.author}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setBook({ ...book, author: e.target.value });
            }}
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            className="px-4 py-2 rounded-md bg-white border-primary border-2 outline-accent"
            onChange={handleImageChange}
          />

          {/* Image Preview */}
          {coverPreview && (
            <img
              src={coverPreview}
              alt="Cover Preview"
              className="h-40 w-40 object-cover mt-2 rounded-md"
            />
          )}

          <select
            name="Genre of the book"
            className="px-4 py-2 rounded-md bg-white border-primary border-2 outline-accent"
            aria-label="Genre of the book"
            aria-autocomplete="both"
            value={book.genre}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setBook({ ...book, genre: e.target.value as books["genre"] })
            }
          >
            <option value={"Fiction"}>Fiction</option>
            <option value={"Non-Fiction"}>Non-Fiction</option>
            <option value={"Fantasy"}>Fantasy</option>
            <option value={"Sci-Fi "}>Sci-Fi</option>
            <option value={"Biography"}>Biography</option>
            <option value={"Other"}>Other</option>
          </select>

          <select
            name="Status of the book"
            aria-label="Status of the book"
            aria-autocomplete="both"
            className="px-4 py-2 rounded-md bg-white border-primary border-2 outline-accent"
            value={book.status}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setBook({ ...book, status: e.target.value as books["status"] })
            }
          >
            <option value={"Read"}>Read</option>
            <option value={"Reading"}>Reading</option>
            <option value={"To Read"}>To read</option>
          </select>

          <textarea
            name="Note of the book"
            placeholder="Note for the book"
            className="px-4 py-2 rounded-md bg-white border-primary border-2 outline-accent h-24 resize-none"
            value={book.notes}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setBook({ ...book, notes: e.target.value });
              console.log(e.target.value);
            }}
          />

          <input
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-primary to-accent font-semibold text-white text-lg rounded-lg hover:opacity-90 transition-all duration-400"
          />

          {error && (
            <div className="text-red-500 font-semibold mt-4">
              <p className="mb-2">Please correct the following errors:</p>
              <ul className="list-disc list-inside">
                {error.errors.map((err, index) => (
                  <li key={index}>
                    <strong>{err.path.join(" > ")}:</strong> {err.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
        <img
          src={bookSideLogo}
          alt="books Logo"
          className="w-1/3 bg-transparent"
        />
      </div>
    </div>
  );
};

export default AddBook;
