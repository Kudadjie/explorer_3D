"use client";
import styles from "./Toolbar.module.scss";
import "./menu.scss";
import logo from "../../public/assets/logo/logo_dm.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function ToolBar() {
  return (
    <Navbar>
      <Image className={styles.logo} src={logo} alt="logo" />
      <NavItem>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

interface NavbarTypes {
  children: React.ReactNode;
}

interface NavItemTypes {
  children?: React.ReactNode;
}

interface DropdownMenuTypes {
  goToMenu?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarTypes> = ({ children }) => {
  return (
    <nav className={styles.toolbar}>
      <ul>{children}</ul>
    </nav>
  );
};

const NavItem: React.FC<NavItemTypes> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <a
        href="#"
        onClick={() => setOpen(!open)}
        style={{ color: "transparent" }}
      >
        &apos;
        <div className={styles.hamburger + " " + (open ? styles.isactive : "")}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </a>

      {open && children}
    </li>
  );
};

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const backArrow = (
    <i className="fa-solid fa-arrow-left-long" style={{ color: "#ffffff" }}></i>
  );

  const view = (
    <i className="fa-regular fa-eye" style={{ color: " #ffffff" }}></i>
  );

  const model3d = (
    <i className="fa-solid fa-cube" style={{ color: "#ffffff" }}></i>
  );

  const ortho = (
    <i className="fa-solid fa-image" style={{ color: "#ffffff" }}></i>
  );

  const features = (
    <i className="fa-solid fa-hill-rockslide" style={{ color: " #ffffff" }}></i>
  );

  interface navFootTypes {
    children: React.ReactNode;
  }
  const Navfoot: React.FC<navFootTypes> = ({ children }) => {
    return <p className={styles.navFoot}>{children}</p>;
  };
  const DropdownItem: React.FC<DropdownMenuTypes> = ({
    goToMenu,
    children,
    icon,
  }) => {
    return (
      <p
        className={styles.dropdownMenuOption}
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        {icon}
        {children}
      </p>
    );
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={0}
        classNames="menu-primary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="change view" icon={view}>
            Change View
          </DropdownItem>
          <hr></hr>
          <DropdownItem goToMenu="features and structures" icon={features}>
            Features and Structures List
          </DropdownItem>
          <hr></hr>
          <DropdownItem>Request Access to Project Files</DropdownItem>
          <hr></hr>
          <DropdownItem>Acknowledgement</DropdownItem>
          <hr></hr>
          <Navfoot>Main Menu</Navfoot>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "change view"}
        timeout={0}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="main" icon={backArrow}>
            Back
          </DropdownItem>
          <DropdownItem icon={model3d}>3D Model</DropdownItem>
          <DropdownItem icon={ortho}>Orthomoasic</DropdownItem>
          <hr></hr>
          <Navfoot>Change View</Navfoot>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "features and structures"}
        timeout={0}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="main" icon={backArrow}>
            Back
          </DropdownItem>
          <DropdownItem>Placeholder</DropdownItem>
          <DropdownItem>Placeholder</DropdownItem>
          <DropdownItem>Placeholder</DropdownItem>
          <DropdownItem>Placeholder</DropdownItem>
          <hr></hr>
          <Navfoot>Features and Structures</Navfoot>
        </div>
      </CSSTransition>
    </div>
  );
};
