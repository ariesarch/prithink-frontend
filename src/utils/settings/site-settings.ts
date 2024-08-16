
export const siteSettings = {
  name: "PriThink",
  description: "",
  logo: {
    url: "/logo.svg",
    alt: "PriThink",
    href: "/home",
    width: 128,
    height: 40,
  },
  defaultLanguage: "en",
  author: {
    name: "RedQ, Inc.",
    websiteUrl: "https://redq.io",
    address: "",
  },
  headerLinks: [],
  authorizedLinks: [
    {
      href: '/dashboard',
      labelTransKey: "authorized-nav-item-profile",
    },
    {
      href: '/dashboard',
      labelTransKey: "authorized-nav-item-logout",
    },
  ],
  currencyCode: "USD",
  sidebarLinks: {
    admin: [
      {
        href: '/home',
        label: "sidebar-nav-item-dashboard",
        icon: "DashboardIcon",
      },
      {
        href: '/groups',
        label: "sidebar-nav-item-groups",
        icon: "GroupsIcon",
      },
      {
        href: '/users',
        label: "sidebar-nav-item-users",
        icon: "UsersIcon",
      },
      {
        href: '/settings',
        label: "sidebar-nav-item-settings",
        icon: "SettingsIcon",
      },
      {
        href: '/integrated-api-keys',
        label: "sidebar-nav-item-api_keys",
        icon: "SettingsIcon",
      },
    ]
  },
  product: {
    placeholder: "/product-placeholder.svg",
  },
  avatar: {
    placeholder: "/avatar.webp",
  },
};
