import { faPage4, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faNotdef,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: 'Production Pages'
  },
  {
    label: "Dashboard",
    path: "/",
    icon: faTachometer,
  },
  {
    label: "Data Creation",
    path: "/datacreation",
    icon: faDatabase,
  },
  {
    label: 'Example Pages'
  },
  {
    label: "Blank",
    path: "/blank",
    icon: faPage4,
  },
  {
    label: "404",
    path: "/404",
    icon: faNotdef,
  },
  

  {
    label: "Form",
    path: "/form",
    icon: faWindows,
  },
  {
    label: "Table",
    path: "/table",
    icon: faTable,
  },
]

export default initMenu