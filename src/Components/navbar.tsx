import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-screen flex justify-between items-center min-h-10 md:p-4 p-2  max-w-[1360px]  mx-auto">
      <Link to={"/"}>
        <h1 className="text-center text-4xl text-transparent bg-clip-text  font-bold bg-gradient-to-r from-primary to-accent">
          BooksVilla
        </h1>
      </Link>

      <ul className="md:flex md:gap-6 md:visible hidden ">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "font-bold text-accent/80 text-xl"
                  : "font-semibold  text-primary text-lg"
              } hover:text-accent duration-200 `
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"add-book"}
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "font-bold text-accent/80 text-xl"
                  : "font-semibold  text-primary text-lg"
              } hover:text-accent duration-200 `
            }
          >
            Add book
          </NavLink>
        </li>
      </ul>

      <Button text={<p>Add a book</p>} action={() => navigate("/add-book")} />
    </nav>
  );
};

export default Navbar;
