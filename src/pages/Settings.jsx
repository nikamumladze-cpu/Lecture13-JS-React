import { Link, Outlet, useLocation } from "react-router-dom";

const Settings = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  const navLinkStyle = (path) => ({
    textDecoration: "none",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "500",
    color: isActive(path) ? "#000" : "#666", 
    borderBottom: isActive(path) ? "2px solid #000" : "2px solid transparent", 
    transition: "all 0.3s ease",
  });

  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ margin: "0 0 30px 0", fontSize: "32px" }}>Settings</h1>

      <nav
        style={{
          display: "flex",
          gap: "20px",
          borderBottom: "1px solid #ddd", 
          marginBottom: "30px",
        }}>
        <Link to="password" style={navLinkStyle("password")}>
          Change Password
        </Link>
        <Link to="billing" style={navLinkStyle("billing")}>
          Billing
        </Link>
      </nav>

      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
