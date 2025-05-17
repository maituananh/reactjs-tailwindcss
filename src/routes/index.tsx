import ItemDetail from "@pages/[Product]";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SearchItem from "@pages/Search";
import routes from "../configs/routes";

const publicRoutes = [
  { path: routes.home, component: Home, layout: null },
  { path: routes.productDetail, component: ItemDetail, layout: null },
  { path: routes.search, component: SearchItem, layout: null },
  { path: routes.login, component: Login, layout: null },
];

const privateRountes = [];

export { privateRountes, publicRoutes };
