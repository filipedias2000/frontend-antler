import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { doSignOut } from "../../firebase/auth";
import { useAuth } from "../../context/authContext";

function Navbar() {
  const Links = [
    { name: "About", ref: "#about" },
    { name: "Become a member", ref: "/become-partner" },
    { name: "Contact", ref: "#contact" },
  ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { userLoggedIn } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header
      className={`w-full py-4 lg:px-0 px-5 sm:px-6 z-[999] duration-300 ${
        scrolled ? "bg-slate-50" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-2">
        <div>
          <a href="/" className="flex items-center gap-2">
            <i className="fa-solid fa-ticket text-3xl"></i>
            <p>CupponApp</p>
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-2xl  absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <i
            className={
              open ? "fa-solid fa-rectangle-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </div>
        <ul
          className={`md:flex-row md:items-center pb-0 flex flex-col items-center m-2 absolute md:static md:z-auto  z-[1] right-5 md:w-auto  ease-in ${
            open ? "top-10 bg-cyan-100" : "top-[-490px]"
          } md:opacity-100 `}
        >
          {Links.map((link) => (
            <li key={link.name} className=" txt-xl md:my-0 my-5 mx-5">
              <a href={link.ref} className="hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          {userLoggedIn ? (
            <Button
              text={"Logout"}
              onClick={() => {
                doSignOut().then(() => {
                  navigate("/login");
                });
              }}
            />
          ) : (
            <Button text={"Login"} onClick={handleLogin} />
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
