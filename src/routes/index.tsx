import routes from "@configs/routes";
import {
  Home,
  ItemDetail,
  Login,
  NotFound,
  SearchItem,
  Suggestion,
} from "@pages/index";

const publicRoutes = [
  { path: routes.home, component: Home, layout: null },
  { path: routes.product, component: Home, layout: null },
  { path: routes.productDetail, component: ItemDetail, layout: null },
  { path: routes.searchByValue, component: SearchItem, layout: null },
  { path: routes.login, component: Login, layout: null },
  { path: routes.logout, component: Home, layout: null },
  { path: routes.suggestionByPage, component: Suggestion, layout: null },
  { path: routes.notFound, component: NotFound, layout: null },
];

const privateRountes = [
  { path: "/private", component: Suggestion, layout: null },
];

export { privateRountes, publicRoutes };
