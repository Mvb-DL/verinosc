import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 2,
    title: "Transparency",
    path: "/transparency",
    newTab: false,
  },
 
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Home",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "About",
        path: "/about",
        newTab: false,
      },
      {
        id: 43,
        title: "Transparency",
        path: "/transparency",
        newTab: false,
      },
     
    ],
  },
];
export default menuData;
