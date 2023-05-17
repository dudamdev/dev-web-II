import { useState } from "react";
import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import fanImage from "./fan-drive.gif";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';

const Item = ({ title, to, icon }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div className="menuItem"
            style={{
                display: "flex",
                columnGap: "8px",
                color: colors.grey[100],
            }}
        >
            {icon}
            <Typography>{title}</Typography>
            <Link to={to} />
        </div>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState("Dashboard");

    return (

        <div
            className="sidebar"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "40vw",
                maxWidth: "300px",
                margin: "16px 0"
            }}
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "24px"
            }}>
                <img
                    alt="profile-user"
                    src={fanImage}
                    style={{
                        cursor: "pointer",
                        width: "200px",
                        borderRadius: "50%"
                    }}
                />
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "8px 0 0 8px" }}
                    textAlign="center"
                >Eduarda Matos</Typography>
                <Typography
                    variant="h5" color={colors.blueAccent[550]}>
                    Vento Fresco Admin
                </Typography>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "16px",
                paddingLeft: "10%",
            }}>
                <Item
                    title="Dashboard"
                    to="/"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 0" }}
                >
                    Perfis de Acesso
                </Typography>
                <Item
                    title="Gerenciar Perfis"
                    to="/profiles"
                    icon={<PeopleOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Novo Perfil"
                    to="/newprofile"
                    icon={<PersonAddAlt1OutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 0" }}
                >
                    Produção
                </Typography>
                <Item
                    title="Ordens de Produção"
                    to="/production"
                    icon={<FactoryOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Calendário de Produção"
                    to="/calendar"
                    icon={<CalendarTodayOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 0" }}
                >
                    Vendas
                </Typography>
                <Item
                    title="Gerenciar Vendas"
                    to="/sales"
                    icon={<PaidOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Recibos"
                    to="/invoices"
                    icon={<ReceiptOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 0" }}
                >
                    Estoque
                </Typography>
                <Item
                    title="Matéria Prima"
                    to="/suppliers"
                    icon={<Inventory2OutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Produtos Finalizados"
                    to="/products"
                    icon={<InventoryOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 0" }}
                >
                    Relatórios
                </Typography>
                <Item
                    title="Produção"
                    to="/productionreport"
                    icon={<BarChartOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Vendas"
                    to="/salesreport"
                    icon={<ShowChartOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Consumo de Energia"
                    to="/energyreport"
                    icon={<EnergySavingsLeafOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
            </div>

        </div>

    )
}

export default Sidebar;

