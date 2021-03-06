import Link from "next/link";
import { withRouter } from "next/router";
import { useContext } from 'react'

import AppContext from '../app/context';

import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch
} from "@blueprintjs/core";

const NavbarComponent = ({ router: { pathname } }) => {
  const {state} = useContext(AppContext)
  return(
  <nav className="bp3-navbar bp3-dark">
    {/* <div style={{ margin: "0 auto", width: "480px" }}> */}
    <div className="bp3-navbar-group bp3-align-left">
      <div className="bp3-navbar-heading">Travels</div>
    </div>
    <div className="bp3-navbar-group bp3-align-right">
      <Link href="/">
        <a className={pathname === "/" ? "is-active" : ""}>
          <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
        </a>
      </Link>
      {state.user && <Link href="/client-only">
        <a className={pathname === "/client-only" ? "is-active" : ""}>
          <button className="bp3-button bp3-minimal bp3-icon-user">
            Client Only
          </button>
        </a>
      </Link>}
      <Link href="/about">
        <a className={pathname === "/about" ? "is-active" : ""}>
          <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
        </a>
      </Link>
    </div>
    {/* </div> */}
  </nav>
)};

export default withRouter(NavbarComponent);
