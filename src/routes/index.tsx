import routes from "@configs/routes";
import { Home, ItemDetail, Login, SearchItem } from "@pages/index";

const publicRoutes = [
  { path: routes.home, component: Home, layout: null },
  { path: routes.product, component: Home, layout: null },
  { path: routes.productDetail, component: ItemDetail, layout: null },
  { path: routes.searchByValue, component: SearchItem, layout: null },
  { path: routes.login, component: Login, layout: null },
];

const privateRountes = [];

export { privateRountes, publicRoutes };
