import React from "react";
import CustomLink, { CustomLinkProps } from "./CustomLink";

type NavLink = Omit<CustomLinkProps, "children"> & {
  text: string;
  pos: "l" | "r";
};
const links: NavLink[] = [
  {
    href: "/",
    text: "Home",
    pos: "l",
    display: "link",
  },
  {
    href: "/subjects",
    text: "Subjects",
    pos: "l",
    display: "link",
  },
  {
    href: "/login",
    text: "Login",
    pos: "r",
    display: "btn",
    style: "blue",
  },
  {
    href: "/register",
    text: "Register",
    pos: "r",
    display: "btn",
    style: "indigo",
  },
];

const NavBar = () => {
  const mapLinks = ({ href, text, display, style }: NavLink) => (
    <li key={text}>
      <CustomLink display={display} href={href} style={style}>
        {text}
      </CustomLink>
    </li>
  );
  const filteredLinks = (position: "l" | "r") =>
    links.filter(({ pos }) => pos === position).map(mapLinks);
  return (
    <div className="bg-gray-100 shadow-md">
      <nav className="flex items-center justify-between h-12 container">
        <div className="flex gap-4 items-center">
          <div>
            <CustomLink
              display={"link"}
              href="/"
              className="text-blue-700 font-bold text-lg hover:text-xl duration-200 no-underline"
            >
              StudyMate
            </CustomLink>
          </div>
          <ul className="flex gap-2">{filteredLinks("l")}</ul>
        </div>
        <ul className="flex gap-2">{filteredLinks("r")}</ul>
      </nav>
    </div>
  );
};

export default NavBar;
