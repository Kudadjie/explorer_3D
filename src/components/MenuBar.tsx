"use client";
import styles from "./MenuBar.module.scss";
import "./HamburgerMenu.scss";
import logo from "../../public/assets/logo/logo_dm.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useInteractiveViewerStore } from "@/store/useInteractiveViewerStore";

export default function MenuBar() {
  return (
    <Navbar>
      <Image className={styles.logo} src={logo} alt="logo" priority />
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
  typeOfMenuItem?: string;
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
  const { toggleAcknowledgementModal, toggleAboutModal } =
    useInteractiveViewerStore((state) => ({
      toggleAcknowledgementModal: state.toggleAcknowledgementModal,
      toggleAboutModal: state.toggleAboutModal,
    }));

  const agisoft = <i className="fa-solid fa-up-right-from-square"></i>;

  const about = <i className="fa-solid fa-question"></i>;

  const acknowledgement = (
    <i className="fa-solid fa-user-graduate" style={{ color: "#ffffff" }}></i>
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
    typeOfMenuItem,
  }) => {
    return (
      <p
        className={styles.dropdownMenuOption}
        onClick={() => {
          goToMenu && setActiveMenu(goToMenu);
          if (typeOfMenuItem === "acknowledgement")
            toggleAcknowledgementModal();
          if (typeOfMenuItem === "about") toggleAboutModal();
        }}
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
          <DropdownItem icon={about} typeOfMenuItem="about">
            About the Project
          </DropdownItem>
          <hr></hr>
          <DropdownItem icon={agisoft}>
            <a
              href="https://cloud.agisoft.com/shared/projects/fefd73ca-1758-4758-9de2-bcf7f6259575"
              target="blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              View Project - Agisoft Cloud{" "}
            </a>
          </DropdownItem>
          <hr></hr>
          <DropdownItem icon={acknowledgement} typeOfMenuItem="acknowledgement">
            Acknowledgement
          </DropdownItem>
          <hr></hr>

          <Navfoot>Main Menu</Navfoot>
        </div>
      </CSSTransition>
    </div>
  );
};
