// import { Link } from "react-router-dom";
import { tokens } from "../theme";
import { IconButton, Typography, useTheme } from "@mui/material";
import fanImage from "../../src/images/fanImage.gif";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const Footer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

        <div style={{
            display: "flex",
            backgroundColor: colors.grey[900],
            justifyContent: "space-evenly",
            padding: "40px"
        }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <img
                    src={fanImage} alt="Logo Vento Fresco" width="140"
                />

                <div>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon />
                    </IconButton>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Typography variant="h6">Baixe o nosso App</Typography>
                    <Typography variant="overline">Disponível para Android e IOS</Typography>
                    <div>
                        <IconButton>
                            <AndroidIcon />
                        </IconButton>
                        <IconButton>
                            <AppleIcon />
                        </IconButton>
                    </div>

                </div>

            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                rowGap: "8px",
            }}>
                <Typography variant="overline">Categorias</Typography>
                <ul style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "8px"
                }}>
                    <li>Ventiladores de Teto</li>
                    <li>Ventiladores de Parede</li>
                    <li>Ventiladores de Coluna</li>
                    <li>Ventiladores de Mesa</li>
                    <li>Ventiladores de Repelente</li>
                    <li>Ventiladores de 2 em 1</li>
                    <li>Acessórios</li>
                    <li>Promoções</li>
                </ul>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                rowGap: "8px",

            }}>
                <Typography variant="overline">Sobre Nós</Typography>
                <ul style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    rowGap: "8px",
                }}>
                    <li>Nossa História</li>
                    <li>Conheça Nossos Colaboradores</li>
                    <li>Trabalhe Conosco</li>
                    <li>Nós na Mídia</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                rowGap: "8px",

            }}>
                <Typography variant="overline">Políticas</Typography>
                <ul style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    rowGap: "8px",
                }}>
                    <li>Política de Privacidade</li>
                    <li>Política de Cookies</li>
                    <li>Termos e Condições de Venda</li>
                    <li>Troca e Devolução</li>
                </ul>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                rowGap: "8px",

            }}>
                <Typography variant="overline">Para Empresas</Typography>
                <ul style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    rowGap: "8px",
                }}>
                    <li>Soluções para Empresas</li>
                    <li>Seja um Revendedor</li>
                </ul>
            </div>
        </div>

    )
};

export default Footer;