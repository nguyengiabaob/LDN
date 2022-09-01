import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilHome,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/LDN/admin/dashboard",
    icon: (
      <CIcon
        icon={cilHome}
        style={{ color: "#000000" }}
        customClassName="nav-icon"
      />
    ),
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Danh mục",
  },
  {
    component: CNavItem,
    name: "Menus",
    to: "/LDN/admin/Menus",
    icon: (
      <CIcon
        icon={cilDrop}
        style={{ color: "#000000" }}
        customClassName="nav-icon"
      />
    ),
  },
  {
    component: CNavItem,
    name: "Pages",
    to: "/LDN/admin/Pages",
    icon: (
      <CIcon
        icon={cilDrop}
        style={{ color: "#000000" }}
        customClassName="nav-icon"
      />
    ),
  },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/LDN/Admin/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   to: '/LDN/Admin//base',
  //   icon: <CIcon icon={cilPuzzle} style={{color:'#000000'}} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/LDN/Admin/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/LDN/Admin/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/LDN/Admin/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //         to: '/LDN/Admin/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //         to: '/LDN/Admin/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //         to: '/LDN/Admin/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //         to: '/LDN/Admin/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //         to: '/LDN/Admin/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //         to: '/LDN/Admin/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //         to: '/LDN/Admin/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //         to: '/LDN/Admin/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //         to: '/LDN/Admin/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //         to: '/LDN/Admin/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //         to: '/LDN/Admin/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //     to: '/LDN/Admin/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //           to: '/LDN/Admin/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //         to: '/LDN/Admin/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //         to: '/LDN/Admin/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //           to: '/LDN/Admin/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //         to: '/LDN/Admin/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //         to: '/LDN/Admin/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //         to: '/LDN/Admin/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //         to: '/LDN/Admin/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //         to: '/LDN/Admin/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //         to: '/LDN/Admin/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //     to: '/LDN/Admin/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //           to: '/LDN/Admin/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //         to: '/LDN/Admin/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //         to: '/LDN/Admin/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //         to: '/LDN/Admin/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //     to: '/LDN/Admin/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //           to: '/LDN/Admin/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //         to: '/LDN/Admin/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
];

export default _nav;
