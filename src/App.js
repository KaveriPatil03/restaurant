import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';
import CartPage from './Components/CartPage';
import CheckOut from './Components/CheckOut';
import Footer from './Components/Footer';
import Dashboard from './Components/admin/Dashboard';
import UserDetails from './Components/admin/UserDetails';
import AdminSideBar from './Components/admin/AdminSideBar';
import OrderDetails from './Components/admin/OrderDetails';
import AdminProductDetails from './Components/admin/AdminProductDetails';
import UserOrderDetails from './Components/UserOrderDetails';
import Payment from './Components/Payment';
import OrderSuccess from './Components/OrderSuccess';
import OrderFailed from './Components/OrderFailed';
import OutOfStock from './Components/OutOfStock';
import DespatchFailed from './Components/DespatchFailed';

// Admin Layout Component
const AdminLayout = ({ children }) => (
  <div style={{ display: 'flex', overflow: 'hidden' }}>
    <div className="col-sm-3 col-md-2 col-lg-2 text-white">
       <AdminSideBar />
    </div>
    <div className="col-10 p-4">{children}</div>
  </div>
);

function App() {
  const location = useLocation(); // Get the current location

  return (
    <>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<UserOrderDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/order-failed" element={<OrderFailed />} />
        <Route path="/out-of-stock" element={<OutOfStock />} />
        <Route path="/despatch-failed" element={<DespatchFailed />} />

        {/* Admin Routes */}
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/user-details"
          element={
            <AdminLayout>
              <UserDetails />
            </AdminLayout>
          }
        />
        <Route
          path="/order-details"
          element={
            <AdminLayout>
              <OrderDetails />
            </AdminLayout>
          }
        />
        <Route
          path="/product-details"
          element={
            <AdminLayout>
              <AdminProductDetails />
            </AdminLayout>
          }
        />
      </Routes>
      {/* Conditionally render the Footer */}
      {!['/dashboard', '/user-details'].includes(location.pathname) && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default AppWrapper;
