import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Transparency",
    path: "/transparence",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/support",
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
        path: "/transparence",
        newTab: false,
      },
      {
        id: 43,
        title: "About Us",
        path: "/about",
        newTab: false,
      },
      {
        id: 44,
        title: "Support",
        path: "/support",
        newTab: false,
      },
    ],
  },
];
export default menuData;
