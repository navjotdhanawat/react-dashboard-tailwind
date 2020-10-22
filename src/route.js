import React from 'react';

import Toaster from './views/notifications/toaster/Toaster'
import Tables from './views/base/tables/Tables'

import Breadcrumbs from './views/base/breadcrumbs/Breadcrumbs'
import Cards from './views/base/cards/Cards'
import Carousels from './views/base/carousels/Carousels'
import Collapses from './views/base/collapses/Collapses'
import BasicForms from './views/base/forms/BasicForms'

import Jumbotrons from './views/base/jumbotrons/Jumbotrons'
import ListGroups from './views/base/list-groups/ListGroups'
import Navbars from './views/base/navbars/Navbars'
import Navs from './views/base/navs/Navs'
import Paginations from './views/base/paginations/Pagnations'
import Popovers from './views/base/popovers/Popovers'
import ProgressBar from './views/base/progress-bar/ProgressBar'
import Switches from './views/base/switches/Switches'

import Tabs from './views/base/tabs/Tabs'
import Tooltips from './views/base/tooltips/Tooltips'
import BrandButtons from './views/buttons/brand-buttons/BrandButtons'
import ButtonDropdowns from './views/buttons/button-dropdowns/ButtonDropdowns'
import ButtonGroups from './views/buttons/button-groups/ButtonGroups'
import Buttons from './views/buttons/buttons/Buttons'
import Charts from './views/charts/Charts'
import Dashboard from './views/dashboard/Dashboard'
import CoreUIIcons from './views/icons/coreui-icons/CoreUIIcons'
import Flags from './views/icons/flags/Flags'
import Brands from './views/icons/brands/Brands'
import Alerts from './views/notifications/alerts/Alerts'
import Badges from './views/notifications/badges/Badges'
import Modals from './views/notifications/modals/Modals'
import Colors from './views/theme/colors/Colors'
import Typography from './views/theme/typography/Typography'
import Widgets from './views/widgets/Widgets'
import Users from './views/users/Users'
import User from './views/users/User'

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
