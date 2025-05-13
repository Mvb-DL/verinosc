import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
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
        title: "Transparency",
        path: "/transparency",
        newTab: false,
      },
     
    ],
  },
];
export default menuData;
