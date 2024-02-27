import App from "../App";
import Test from "./Test";

const SidebarItems = [
  {
    title: "Home Work",
    path: "/",
    icon: "bx-book-bookmark",
    component: <App />,
  },
  {
    title: "Notice",
    path: "/test",
    icon: "bx-chalkboard",
    component: <Test />,
  },
  {
    title: "Exam",
    path: "/test",
    icon: "bx-food-menu",
    component: <Test />,
  },
  {
    title: "Result",
    path: "/test",
    icon: "bx-calendar-check",
    component: <Test />,
  },
  {
    title: "Competetion",
    path: "/test",
    icon: "bx-trophy",
    component: <Test />,
  },
  {
    title: "Messages",
    path: "/test",
    icon: "bx-message-rounded",
    component: <Test />,
  },
  {
    title: "Contact Us",
    path: "/test",
    icon: "bx-user",
    component: <Test />,
  },

  {
    title: "Schedule", // Main menu item with submenus
    icon: "bx-spreadsheet",
    subNavOpen: false,
    subNav: [
      {
        title: "Prepration",
        path: "/submenu1",
        icon: "bx-home-alt",
        component: <App />,
      },
      {
        title: "School",
        path: "/submenu2",
        icon: "bx-home-alt",
        component: <Test />,
      },
    ],
  },
  {
    title: "Schedule", // Main menu item with submenus
    icon: "bx-spreadsheet",
    subNavOpen: false,
    subNav: [
      {
        title: "Prepration",
        path: "/submenu1",
        icon: "bx-home-alt",
        component: <App />,
      },
      {
        title: "School",
        path: "/submenu2",
        icon: "bx-home-alt",
        component: <Test />,
      },
    ],
  },
  // Other menu items...
];

export default SidebarItems;
