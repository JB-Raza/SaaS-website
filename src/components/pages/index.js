// pages
import Home from './Home.jsx'
import Contact from './Contact.jsx'
// pricing section pages
import Pricing from './pricingAndPages/Pricing.jsx'
import AppIntegration from './pricingAndPages/AppIntegration.jsx'
import IntegrationDetails from './pricingAndPages/IntegrationDetails.jsx'

// shop pages
import Shop from './shop/Shop.jsx'
import CartPage from './shop/CartPage.jsx'
import CheckoutPage from './shop/CheckoutPage.jsx'
import ShopDetails, { ProductReviews, ProductDetails } from './shop/ShopDetails.jsx'


// auth
import Login from './auth/Login.jsx'
import Signup from './auth/Signup.jsx'

// dashboard
import Dashboard from './dashboard/Dashboard.jsx'
import SummeryPage from './dashboard/SummeryPage.jsx'
import Orders from './dashboard/Orders.jsx'
import Wishlist from './dashboard/Wishlist.jsx'
import AccountDetails from './dashboard/AccountDetails.jsx'
// blogs
import Blogs from './blogs/Blogs.jsx'
import BlogDetails from './blogs/BlogDetails.jsx'

// private route
import PrivateRoute from './PrivateRoute.jsx'

import Page404 from './Page404.jsx'


export {
    Home, Contact,
    Pricing, AppIntegration, IntegrationDetails,
    Shop, ShopDetails, ProductReviews, ProductDetails, CartPage, CheckoutPage,
    Login, Signup,
    Dashboard, SummeryPage, Orders, Wishlist, AccountDetails,
    Blogs, BlogDetails,
    PrivateRoute,
    Page404
}