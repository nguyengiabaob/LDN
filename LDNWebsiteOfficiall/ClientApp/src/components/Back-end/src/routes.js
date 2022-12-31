import React from "react";
import Setting from "./views/setting/Setting";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const Pages = React.lazy(() => import("./views/PageModule/Pages"));
const News = React.lazy(() => import("./views/news/ListNews"));
const ActivityFields = React.lazy(() =>
  import("./views/ActivityFields/ActivityFields")
);
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Category = React.lazy(() => import("./views/Category/Category"));
// Base
const Accordion = React.lazy(() => import("./views/base/accordion/Accordion"));
const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Paginations")
);
const Placeholders = React.lazy(() =>
  import("./views/base/placeholders/Placeholders")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const Progress = React.lazy(() => import("./views/base/progress/Progress"));
const Spinners = React.lazy(() => import("./views/base/spinners/Spinners"));
const Tables = React.lazy(() => import("./views/base/tables/Tables"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));

// Buttons
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Dropdowns = React.lazy(() =>
  import("./views/buttons/dropdowns/Dropdowns")
);

//Forms
const ChecksRadios = React.lazy(() =>
  import("./views/forms/checks-radios/ChecksRadios")
);
const FloatingLabels = React.lazy(() =>
  import("./views/forms/floating-labels/FloatingLabels")
);
const FormControl = React.lazy(() =>
  import("./views/forms/form-control/FormControl")
);
const InputGroup = React.lazy(() =>
  import("./views/forms/input-group/InputGroup")
);
const Layout = React.lazy(() => import("./views/forms/layout/Layout"));
const Range = React.lazy(() => import("./views/forms/range/Range"));
const Select = React.lazy(() => import("./views/forms/select/Select"));
const BrandsS = React.lazy(() => import("./views/Projects/Projects"));
const Validation = React.lazy(() =>
  import("./views/forms/validation/Validation")
);

const Charts = React.lazy(() => import("./views/charts/Charts"));

// Icons
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
// Notifications
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Toasts = React.lazy(() => import("./views/notifications/toasts/Toasts"));

const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
const routes = [
  { path: "/home", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  // { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/pages", name: "Pages", component: Pages },
  { path: "/menus", name: "Menus", component: Category },
  { path: "/projects", name: "projects", component: BrandsS },
  { path: "/setting", name: "setting", component: Setting },
  { path: "/news", name: "News", component: News },
  {
    path: "/activityFields",
    name: "activityFields",
    component: ActivityFields,
  },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/placeholders", name: "Placeholders", component: Placeholders },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress", name: "Progress", component: Progress },
  { path: "/base/spinners", name: "Spinners", component: Spinners },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  { path: "/buttons/dropdowns", name: "Dropdowns", component: Dropdowns },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/forms", name: "Forms", component: FormControl, exact: true },
  { path: "/forms/form-control", name: "Form Control", component: FormControl },
  { path: "/forms/select", name: "Select", component: Select },
  {
    path: "/forms/checks-radios",
    name: "Checks & Radios",
    component: ChecksRadios,
  },
  { path: "/forms/range", name: "Range", component: Range },
  { path: "/forms/input-group", name: "Input Group", component: InputGroup },
  {
    path: "/forms/floating-labels",
    name: "Floating Labels",
    component: FloatingLabels,
  },
  { path: "/forms/layout", name: "Layout", component: Layout },
  { path: "/forms/validation", name: "Validation", component: Validation },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toasts", name: "Toasts", component: Toasts },
  { path: "/widgets", name: "Widgets", component: Widgets },
];

export default routes;
