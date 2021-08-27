import "./Navbar.scss";
import WhiteLogo from "../../Assets/WhiteLogo.svg";

const Navbar = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="navbar-wrapper">
        <div>
          <div className="nav-logo">
            <img src={WhiteLogo} alt="" />
          </div>
          <div className="nav-logo-name">ImageFlow</div>
        </div>
        <div>
          <div className="nav-item">About</div>
          <div className="nav-item">Contact Us</div>
          <div className="nav-item">Log In</div>
          <div className="nav-item">Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
