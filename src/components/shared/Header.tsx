import { Link, NavLink, useNavigate } from "react-router-dom";
import { headerNavigationLinks } from "../../constants";
import Button from "../custom/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    navigate(`/?scrollTo=${sectionId}`);
  };

  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control the menu open/close

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 82) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to close the dropdown menu when a link is clicked
  const handleMenuClick = (section?: string) => {
    setMenuOpen(false); // Close the menu
    if (section) handleNavigation(section);
  };

  return (
    <>
      <div className={isSticky ? "h-[90px]" : ""}></div>
      <div
        className={`${
          isSticky
            ? "fixed top-0 left-0 w-full bg-white shadow-lg z-[70]"
            : "relative"
        } w-full h-20 px-8 py-2`}>
        <div className="w-full flex items-center justify-between h-full">
          <Link to={"/"}  className="w-full cursor-pointer">
            <h1 className="font-semibold text-xl lg:text-4xl text-green-primary">
              Skillup
            </h1>
            <p className="font-base text-xs text-green-primary tracking-wide">
              An initiative By Hubnex Labs
            </p>
          </Link>
          <div className="w-full h-full hidden lg:flex items-center justify-end gap-6 px-4 text-base">
            {headerNavigationLinks.map((link, i) => {
              if (link.link)
                return (
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-green-primary font-semibold"
                          : "font-normal"
                      }  `
                    }
                    to={link.link}
                    key={link.label}>
                    {link.label}
                  </NavLink>
                );
              else {
                return (
                  <li
                    key={i}
                    className="list-none cursor-pointer"
                    onClick={() => handleNavigation(link.section || "")}>
                    {link.label}
                  </li>
                );
              }
            })}
            <Button text="Enroll Now" />
          </div>
          <div className="block lg:hidden">
            <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
              <DropdownMenuTrigger>
                <img
                  src="/icons/menu.svg"
                  alt="menu"
                  onClick={() => setMenuOpen(!menuOpen)} // Toggle menu on click
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {headerNavigationLinks.map((link, i) => {
                  if (link.link) {
                    return (
                      <DropdownMenuItem key={i}>
                        <NavLink
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-green-primary font-semibold"
                                : "font-normal"
                            }  `
                          }
                          to={link.link}
                          key={link.label}
                          onClick={() => setMenuOpen(false)} // Close the menu on link click
                        >
                          {link.label}
                        </NavLink>
                      </DropdownMenuItem>
                    );
                  } else {
                    return (
                      <DropdownMenuItem
                        key={i}
                        onClick={() => handleMenuClick(link.section || "")}>
                        <li key={i} className="list-none cursor-pointer">
                          {link.label}
                        </li>
                      </DropdownMenuItem>
                    );
                  }
                })}
                <DropdownMenuItem key={"jeu"}>
                  <div onClick={() => setMenuOpen(false)}>
                    <Button text="Enroll Now" classname="w-full" />
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
