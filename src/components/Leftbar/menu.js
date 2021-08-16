import {
  faHome,
  faAddressBook,
  faImage,
  faNewspaper,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Default_Tab = "/";
export const MenuItem = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    tabname: "Home",
    route: "/",
  },
  {
    icon: <FontAwesomeIcon icon={faAddressBook} />,
    tabname: "People",
    route: "/people",
  },
  {
    icon: <FontAwesomeIcon icon={faImage} />,
    tabname: "Photos",
    route: "/photos",
  },
  {
    icon: <FontAwesomeIcon icon={faNewspaper} />,
    tabname: "News Feed",
    route: "/newsfeed",
  },
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    tabname: "Profile",
    route: "/profile",
  },
  {
    icon: <FontAwesomeIcon icon={faCog} />,
    tabname: "Settings",
    route: "/settings",
  },
];
