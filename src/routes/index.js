import HomePage from "../pages/HomePages/HomePage";
import OrderPages from "../pages/OrderPages/OrderPages";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ProductsPages from "../pages/ProductsPage/ProductsPages";

export const routes = [
    {
        path: '/',
        page:HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page:OrderPages,
        isShowHeader: true
    },
    {
        path: '/product',
        page:ProductsPages,
        isShowHeader: true
    },
    {
        path: '*',
        page: PageNotFound
    }
]