import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import classes from "./Style.module.css"
import shinki from './shinki-inu-logo.png';

function NavBar() {
  const { pathname } = useLocation();

  return (
    <div className={classes.nav_menu}>
      <div className={classes.first_nav}>
        <a href="" className="navbar-brand">      <img src={shinki} alt="company logo" width={40} height={40} /></a>
      </div>

      <Menu theme="light" mode="horizontal" className={classes.second_nav} defaultSelectedKeys={[pathname]}>
        <Menu.Item key="/dashboard">
          <NavLink to="/dashboard" className={classes.nav_link}> Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="/overview">
          <NavLink to="/overview" className={classes.nav_link}> Overview</NavLink>
        </Menu.Item>
        <Menu.Item className={classes.nav_item} key="/prices">
          <NavLink to="/prices" className={classes.nav_link}> Coins</NavLink>
        </Menu.Item>
        <Menu.Item key="/wallet">
          <NavLink to="/transfer" className={classes.nav_link}> Transfer</NavLink>
        </Menu.Item>
        <Menu.Item key="/erc20transfers">
          <NavLink to="/erc20transfers" className={classes.nav_link}> Activity</NavLink>
        </Menu.Item>
        <Menu.Item key="/swap">
          <NavLink to="/swap" className={classes.nav_link}> Trade</NavLink>
        </Menu.Item>
        <Menu.Item key="overview">
          <NavLink to="/rugchecker" className={classes.nav_link}> Rugchecker</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBar;
