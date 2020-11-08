export const MenuItems = [
  {
    id: 1,
    name: "HOME",
    path: "/",
    isAuth: "MAYBE",
  },
  {
    id: 2,
    name: "SHOP",
    path: "/product",
    isAuth: "MAYBE",
  },
  {
    id: 3,
    name: "COLLECTION",
    path: "/collection",
    isAuth: "MAYBE",
  },
  {
    id: 4,
    name: "ABOUT",
    isAuth: "MAYBE",

    items: [
      { id: "4a", name: "HELP & MORE", path: "/page/help-more" },
      { id: "4b", name: "ABOUT US", path: "/page/about" },
      { id: "4c", name: "PRIVACY POLICY", path: "/page/privacy-policy" },
      { id: "4d", name: "CORPORATE", path: "/page/corporate" },
      { id: "4e", name: "CONTACT US", path: "/page/contact-us" },
      { id: "4f", name: "FAQ", path: "/page/faq" },
    ],
  },

  {
    id: 5,
    name: "LOGGED IN AS",
    isAuth: true,
    items: [
      { id: "5d", name: "DASHBOARD", path: "/dashboard", isAuth: true },
      { id: "5e", name: "ORDERS", path: "/order-history", isAuth: true },
      { id: "5f", name: "LOGOUT", path: "##", isAuth: true },
    ],
  },

  {
    id: 6,
    name: "ACCOUNT",
    isAuth: false,
    items: [
      { id: "6a", name: "LOGIN", path: "/signin", isAuth: false },
      { id: "6b", name: "REGISTER", path: "/signup", isAuth: false },
      {
        id: "6c",
        name: "FORGOT PASSWORD",
        path: "/forgot-password",
        isAuth: false,
      },
    ],
  },
];
