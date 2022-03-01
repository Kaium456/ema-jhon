import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OrderView from "./components/OrderReview/OrderView";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderView></OrderView>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
