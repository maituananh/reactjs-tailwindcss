import routes from "../configs/routes";
import Home from "../pages/Home";
import ItemDetail from "../pages/Product";
import SearchItem from "../pages/Search";

const publicRoutes = [
  { path: routes.home, component: Home, layout: null },
  { path: routes.productDetail, component: ItemDetail, layout: null },
  { path: routes.search, component: SearchItem, layout: null },
];

const privateRountes = [];

export { privateRountes, publicRoutes };
