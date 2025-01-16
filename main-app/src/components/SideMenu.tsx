import React from "react";
import { Link, useLocation } from "react-router-dom";

const sideNavOptions = [
  { name: "Home", path: "/" },
  { name: "App 1", path: "/app1" },
  { name: "App 2", path: "/app2" },
];

const SideMenu: React.FC = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <nav>
      <ul>
        {sideNavOptions.map((item) => (
          <li key={item.name} className={isActive(item.path) ? "active" : ""}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
