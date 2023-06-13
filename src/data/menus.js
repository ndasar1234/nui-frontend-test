import { faPage4, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  // faLock,
  // faNoteSticky,
  faNotdef
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Dashboard",
    path: "/",
    icon: faTachometer,
  },
  {
    label: 'Label1'
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
    label: 'Label2'
  },
  {
    label: "Form",
    path: "/form",
    icon: faWindows,
  },
  {
    label: "Tabel",
    path: "/table",
    icon: faTable,
  },

  {
    label: 'Label3'
  },
  // {
  //   label: "Login",
  //   path: "/auth/login",
  //   icon: faLock,
  // },
  // {
  //   label: "Register",
  //   path: "/auth/register",
  //   icon: faNoteSticky,
  // },
];

export default initMenu