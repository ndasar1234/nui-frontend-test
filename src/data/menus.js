import { faPage4, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faNotdef,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Dashboard",
    path: "/",
    icon: faTachometer,
  },
  // {
  //   label: 'Label1'
  // },
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
  
  // {
  //   label: 'Label2'
  // },
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
  {
    label: "Data Creation",
    path: "/datacreation",
    icon: faDatabase,
  }

  // {
  //   label: 'Label3'
  // },
]

export default initMenu