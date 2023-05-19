import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./scenes/Home";
import Login from "./scenes/Login";
import SignUp from "./scenes/SignUp";
import TableFanPg from "./scenes/TableFanPg";
import WallFanPg from "./scenes/WallFanPg";
import CeilingFanPg from "./scenes/CeilingFanPg";
import ColumnFanPg from "./scenes/ColumnFanPg";
import BugFanPg from "./scenes/BugFanPg";
import BiFanPg from "./scenes/BiFanPg";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Router>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<SignUp />} />
                  <Route path="tablefanpg" element={<TableFanPg />} />
                  <Route path="wallfanpg" element={<WallFanPg />} />
                  <Route path="ceilingfanpg" element={<CeilingFanPg />} />
                  <Route path="columnfanpg" element={<ColumnFanPg />} />
                  <Route path="bugfanpg" element={<BugFanPg />} />
                  <Route path="bifanpg" element={<BiFanPg />} />
                </Route>
              </Routes>
            </Router>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
