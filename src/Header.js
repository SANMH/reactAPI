import React from "react";
import { Link } from "react-router-dom";
 
// class component
class Header extends React.Component {
  render() {
    return (
      <header>
        <div>Logo</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/Subasta">Subasta</Link>
          <Link to="/Oferta">Oferta</Link>
        </nav>
      </header>
    );
  }
}
 
export default Header;