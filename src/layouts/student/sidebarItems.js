/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default [
  {
    url: "/dashboard/analytics",
    name: "Home",
    tag: "2",
    tagColor: "warning",
    icon: "HomeIcon",
    i18n: "Home"
  },
  {
    url: "/apps/email",
    name: "Mentors",
    slug: "mentors",
    icon: "UsersIcon",
    i18n: "Mentors"
  },
  {
    url: "/apps/email",
    name: "Messages",
    slug: "mentors",
    icon: "MailIcon",
    i18n: "Messages"
  },
  {
    url: "/apps/email",
    name: "Bookings",
    slug: "bookings",
    icon: "InboxIcon",
    i18n: "Bookings"
  },

  {
    header: "Support",
    i18n: "Support"
  },
  {
    url:
      "https://pixinvent.com/demo/vuesax-vuejs-admin-dashboard-template/documentation/",
    name: "Documentation",
    icon: "BookOpenIcon",
    slug: "external",
    i18n: "Documentation",
    target: "_blank"
  },
  {
    url: "https://pixinvent.ticksy.com/",
    name: "Raise Support",
    icon: "LifeBuoyIcon",
    slug: "external",
    i18n: "RaiseSupport",
    target: "_blank"
  }
];
