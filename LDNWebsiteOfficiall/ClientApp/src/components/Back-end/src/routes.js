import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
const Category= React.lazy(()=>import('./views/Category/Category'))
// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/LDN/Admin/', exact: true, name: 'Home' },
  { path: '/LDN/Admin/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/LDN/Admin/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/LDN/Admin/Category', name: 'Category', component: Category },
  { path: '/LDN/Admin/theme/typography', name: 'Typography', component: Typography },
  { path: '/LDN/Admin/base', name: 'Base', component: Cards, exact: true },
  { path: '/LDN/Admin/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/LDN/Admin/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/LDN/Admin/base/cards', name: 'Cards', component: Cards },
  { path: '/LDN/Admin/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/LDN/Admin/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/LDN/Admin/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/LDN/Admin/base/navs', name: 'Navs', component: Navs },
  { path: '/LDN/Admin/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/LDN/Admin/base/placeholders', name: 'Placeholders', component: Placeholders },
  { path: '/LDN/Admin/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/LDN/Admin/base/progress', name: 'Progress', component: Progress },
  { path: '/LDN/Admin/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/LDN/Admin/base/tables', name: 'Tables', component: Tables },
  { path: '/LDN/Admin/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/LDN/Admin/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/LDN/Admin/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/LDN/Admin/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/LDN/Admin/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/LDN/Admin/charts', name: 'Charts', component: Charts },
  { path: '/LDN/Admin/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/LDN/Admin/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/LDN/Admin/forms/select', name: 'Select', component: Select },
  { path: '/LDN/Admin/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/LDN/Admin/forms/range', name: 'Range', component: Range },
  { path: '/LDN/Admin/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/LDN/Admin/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/LDN/Admin/forms/layout', name: 'Layout', component: Layout },
  { path: '/LDN/Admin/forms/validation', name: 'Validation', component: Validation },
  { path: '/LDN/Admin/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/LDN/Admin/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/LDN/Admin/icons/flags', name: 'Flags', component: Flags },
  { path: '/LDN/Admin/icons/brands', name: 'Brands', component: Brands },
  { path: '/LDN/Admin/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/LDN/Admin/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/LDN/Admin/notifications/badges', name: 'Badges', component: Badges },
  { path: '/LDN/Admin/notifications/modals', name: 'Modals', component: Modals },
  { path: '/LDN/Admin/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/LDN/Admin/widgets', name: 'Widgets', component: Widgets },
]

export default routes
