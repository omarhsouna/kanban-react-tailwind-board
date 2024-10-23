import { NavLink } from "react-router-dom";
import {
  AppsOutline,
  GridOutline,
  HomeOutline,
  NewspaperOutline,
  NotificationsOutline,
  PeopleOutline,
  PieChartOutline,
} from "react-ionicons";

const navLinks = [
  {
    title: "Home",
    icon: <HomeOutline color="#555" width="22px" height="22px" />,
    url: "/",
  },
  {
    title: "Boards",
    icon: <AppsOutline color="#555" width="22px" height="22px" />,
    url: "/boards",
  },
  {
    title: "Projects",
    icon: <GridOutline color="#555" width="22px" height="22px" />,
    url: "/projects",
  },
  {
    title: "Analytics",
    icon: <PieChartOutline color="#555" width="22px" height="22px" />,
    url: "/analytics",
  },
  {
    title: "Workflows",
    icon: <PeopleOutline color="#555" width="22px" height="22px" />,
    url: "/workflows",
  },
  {
    title: "Notifications",
    icon: <NotificationsOutline color="#555" width="22px" height="22px" />,
    url: "/notifications",
  },
  {
    title: "Newsletter",
    icon: <NewspaperOutline color="#555" width="22px" height="22px" />,
    url: "/newsletter",
  },
];
const SideBar = () => {
  return (
    <div className="px-3 h-full w-[250px] bg-white flex-shrink-0">
      
      <nav>
        <ul className="flex flex-col gap-3">
          {navLinks.map((link) => {
            return (
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full rounded-lg hover:bg-primary px-2 py-3 cursor-pointer ${
                    isActive ? "bg-primary" : "bg-transparent"
                  }`
                }
              >
                {link.icon}
                <span className="font-medium text-base">{link.title}</span>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
