import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch"


        }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;