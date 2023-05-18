import { IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { Link } from "react-router-dom";
import fanImage from "../../src/images/fanImage.gif";
import TextField from '@mui/material/TextField';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "flex-start",
        }}>
            <div
                className="row"
                style={{

                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "space-around",
                    padding: "8px 0 4px 0",
                    borderBottom: `1px solid ${colors.blueAccent[550]}`
                }}
            >

                <div style={{
                    display: "flex",
                    columnGap: "8px",
                    alignItems: "center",
                    cursor: "pointer"
                }}>

                    <SupportAgentOutlinedIcon />

                    <Typography variant="subtitle1">Precisa de Ajuda? Fale com um vendedor</Typography>
                </div>

                <div>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                    </IconButton>
                    <IconButton>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                </div>
            </div>

            <div
                className="row"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    padding: "0 60px",
                    marginTop: "16px"
                }}
            >

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Link to="/"><img src={fanImage} alt="Logo Vento Fresco" width="140" /></Link>

                </div>
                <TextField
                    sx={{
                        width: "15vw",
                        backgroundColor: colors.primary[400],
                        borderRadius: "8px"
                    }}
                    label="Informe seu CEP"
                    type="number"
                    variant="outlined"
                />
                <div style={{
                    display: "flex"
                }}>
                    <TextField
                        sx={{
                            width: "40vw",
                            backgroundColor: colors.primary[400],
                            borderRadius: "8px"
                        }}
                        label="Encontre aqui os melhores ventiladores"
                        InputProps={{ type: 'search' }}
                        variant="outlined"
                    />
                    <IconButton>
                        <SearchOutlinedIcon fontSize="large" />
                    </IconButton>
                </div>
                <Link to="/login">
                    <div style={{
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        columnGap: "8px",
                        padding: "10px 16px",
                        borderRadius: "8px",
                        backgroundColor: colors.primary[400],
                    }}>
                        <PersonOutlinedIcon fontSize="large" />
                        <div style={{
                            textAlign: "center"
                        }}>
                            <Typography variant="h5">Entre ou cadastre-se</Typography>
                            <Typography variant="body1">para ver seus pedidos</Typography>
                        </div>
                    </div>
                </Link>
                <IconButton>
                    <FavoriteOutlinedIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <ShoppingCartOutlinedIcon fontSize="large" />
                </IconButton>
            </div>
        </div>

    )
};

export default Header;