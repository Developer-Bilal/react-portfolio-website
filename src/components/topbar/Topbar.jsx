import "./topbar.scss";
// import { Person, Mail } from "@mui/icons-material";

export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            {/* <Person /> */}
            <span>+123 124 124</span>
          </div>
          <div className="itemContainer">
            {/* <Mail /> */}
            <span>test@genius.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Topbar;
