import { IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import fanImage from "./fan-drive.gif";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function CheckboxesTags() {
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={fanCategory}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}
            style={{ width: "15vw" }}
            renderInput={(params) => (
                <TextField {...params} label="Filtre por Categorias" placeholder="Categorias" variant="outlined" />
            )}

        />
    );
}

const fanCategory = [
    { title: 'Ventilador de Teto' },
    { title: 'Ventilador de Parede' },
    { title: 'Ventilador de Coluna' },
    { title: 'Ventilador de Mesa' },
    { title: 'Ventilador de Repelente' },
    { title: 'Ventilador de 2 em 1' },
    { title: 'Acessórios' },

]

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
                    justifyContent: "space-around",
                    padding: "8px 0 4px 0",
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
            <div style={{
                width: "100vw",
                height: "1px",
                backgroundColor: colors.primary[400],
            }} />

            <div
                className="row"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: "0 60px",
                    marginTop: "16px"
                }}
            >
                <img src={fanImage} alt="Logo Vento Fresco" width="140" />
                <TextField
                    sx={{
                        width: "15vw",
                        backgroundColor: colors.primary[400],
                        borderRadius: "8px"
                    }}
                    label="Informe seu CEP"
                    InputProps={{ type: 'search' }}
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
                <IconButton>
                    <FavoriteOutlinedIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <ShoppingCartOutlinedIcon fontSize="large" />
                </IconButton>
            </div>

            <div
                className="row"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: "4vw",
                    padding: "0 20px",
                    marginBottom: "24px"
                }}
            >
                <CheckboxesTags />
                <Typography variant="h5" style={{ textTransform: "uppercase", cursor: "pointer" }}>Produtos</Typography>
                <Typography variant="h5" style={{ textTransform: "uppercase", cursor: "pointer" }}>Acessórios</Typography>
                <Typography variant="h5" style={{ textTransform: "uppercase", cursor: "pointer" }}>Promoções</Typography>
                <Typography variant="h5" style={{ textTransform: "uppercase", cursor: "pointer" }}>Baixe o app</Typography>
                <Typography variant="h5" style={{ textTransform: "uppercase", cursor: "pointer" }}>Sobre Nós</Typography>
            </div>
            <div style={{
                width: "100vw",
                height: "4px",
                backgroundColor: colors.blueAccent[550],
            }} />

        </div>

    )
};

export default Header;