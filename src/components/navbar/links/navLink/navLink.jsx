"use client";

const { default: Link } = require("next/link");
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
const NavLink = ({ item }) => {
  const pathName = usePathname();
  const { title, path } = item;
  return (
    <Link
      href={path}
      className={`${styles.container} ${pathName === path && styles.active}`}
    >
      {" "}
      {title}
    </Link>
  );
};

export default NavLink;
