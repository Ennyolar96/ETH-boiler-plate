import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Layout } from "antd";
import "antd/dist/antd.css";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Account from "./components/Account/Account";
import Prices from "./Prices";
import ERC20Transfers from "components/ERC20Transfers";
import Wallet from "components/Wallet";
import Chains from "components/Chains";
import Footer from "components/Footer";
import Overview from "components/Overview";

// const { Header } = Layout;

// const styles = {
//   subhead: {
//     display: "flex",
//     justifyContent: "center",
//     fontFamily: "Roboto, sans-serif",
//     color: "#041836",
//     marginTop: "80px",
//     padding: "10px",
//   },
//   content: {
//     display: "flex",
//     justifyContent: "left",
//     fontFamily: "Roboto, sans-serif",
//     color: "#041836",
//     marginTop: "100px",
//     padding: "10px",
//   },
//   header: {
//     position: "fixed",
//     zIndex: 1,
//     width: "100%",
//     background: "#fff",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     fontFamily: "Roboto, sans-serif",
//     borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
//     padding: "0 10px",
//     boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
//   },
//   headerRight: {
//     display: "flex",
//     gap: "20px",
//     alignItems: "center",
//     fontSize: "15px",
//     fontWeight: "600",
//   },
// };

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="row row-cols-sm-2 row-cols-2">
        <div className="col">
          <Chains />
        </div>
        <div className="col">
          <div className="ms-auto">
            <Account />
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path="/"> <Dashboard /> </Route>
        <Route path="/dashboard"> <Dashboard /> </Route>
        <Route path="/prices"> <Prices /> </Route>
        <Route path="/erc20transfers"> <ERC20Transfers /> </Route>
        <Route path="/transfer"> <Wallet /> </Route>
        <Route path="/overview"> <Overview /> </Route>
      </Switch>
      <Footer />
    </Router>
    // </Layout>
  );
};

export default App;
