import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const backgroundColor = "#f0f2f5";

  return (
    <>
      <style>{`
        body, html, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          background-color: ${backgroundColor}; 
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100vw",
        }}>
        <header
          style={{
            width: "100%",
            background: "#1a1a1a",
            color: "white",
            padding: "15px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}>
          <h2 style={{ margin: 0 }}>My App</h2>
          <nav>
            <ul
              style={{
                display: "flex",
                gap: "30px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}>
              <li>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  style={{ color: "white", textDecoration: "none" }}>
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  style={{ color: "white", textDecoration: "none" }}>
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main style={{ flex: 1, width: "100%", margin: 0, padding: "40px" }}>
          <Outlet />
        </main>

        <footer
          style={{
            width: "100%",
            background: "#1a1a1a",
            color: "rgba(255,255,255,0.6)",
            padding: "20px 0",
            textAlign: "center",
            marginTop: "auto",
          }}>
          <p style={{ margin: 0, letterSpacing: 1.5 }}>© 2026 Hala Madrid</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
