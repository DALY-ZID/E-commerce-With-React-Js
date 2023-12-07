import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './components/AdminSide/LoginPage';
import RegisterPage from './components/AdminSide/register';
import ListProduct from './components/AdminSide/Home/ListProduct';
import { CartProvider } from 'use-shopping-cart';
import EditProduct from './components/AdminSide/Home/EditProduct';
import AddProduct from './components/AdminSide/Home/AddProduct';
import Info from './components/ClientSide/info';
import ListCards from './components/ClientSide/ListCards';
import Cart from './components/ClientSide/Cart';
import PdfCart from "./components/ClientSide/PdfCart";
function App() {
  return (
    <div>
        <CartProvider>
          <Router>
            <Routes>
              <Route path='/' element={<ListCards/>}/>
              <Route path='/login' exact element={<LoginPage/>}/>
              <Route path='/products' element={<ListProduct/>}/>
              <Route path='/register' element={<RegisterPage/>}/>
              <Route path="/EditProduct/:id" element={ <EditProduct/>} />
              <Route path="/AddProduct" element={ <AddProduct/>} />
              <Route path="/Info/:id" element={<Info/>} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/pdfCart' element={<PdfCart/>}/>
            </Routes>
        </Router>

        </CartProvider>
    </div>
  );
}

export default App;
