import { z } from "zod";

// Book to upload:
export const bookSchema = z.object({
  title: z.string().min(1, { message: "Book's title can't be empty" }),
  author: z.string().min(1, { message: "Book's title can't be empty" }),
  genre: z.enum([
    "Fiction",
    "Non-Fiction",
    "Fantasy",
    "Sci-Fi",
    "Biography",
    "Other",
  ]),
  status: z.enum(["To Read", "Reading", "Read"]),
  notes: z.string().optional(),
  coverImage: z
    .instanceof(File)
    .refine(
      (file) => file.size < 2 * 1024 * 1024,
      "File size must be less than 2MB"
    )
    .optional(),
});

const uploadedBook = z.object({
  title: z.string().min(1, { message: "Book's title can't be empty" }),
  author: z.string().min(1, { message: "Book's title can't be empty" }),
  genre: z.enum([
    "Fiction",
    "Non-Fiction",
    "Fantasy",
    "Sci-Fi",
    "Biography",
    "Other",
  ]),
  status: z.enum(["To Read", "Reading", "Read"]),
  notes: z.string().optional(),
  coverImage: z.string().optional(),
});

export type books = z.infer<typeof bookSchema>;
export type upBook = z.infer<typeof uploadedBook>;

// Featured Book
const HPBookSchema = z.object({
  number: z.number(),
  title: z.string(),
  originalTitle: z.string(),
  releaseDate: z.string(),
  description: z.string(),
  pages: z.number(),
  cover: z.string().url(),
  index: z.number(),
});

export const HPBooksResponseSchema = z.array(HPBookSchema);
export type HPbooks = z.infer<typeof HPBookSchema>;
export type HPBooksResponse = z.infer<typeof HPBooksResponseSchema>;
