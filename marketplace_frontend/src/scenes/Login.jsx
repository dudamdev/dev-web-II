import { useTheme, TextField, Typography } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";


const Login = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "16px",
            margin: "80px 0 100px 0"
        }}>
            <Typography variant="subtitle1">Para continuar, digite seu email e sua senha</Typography>
            <form style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "16px",
                width: "24vw"

            }}>
                <TextField
                    sx={{
                        width: "24vw",
                        backgroundColor: colors.primary[400],
                        borderRadius: "8px"
                    }}
                    label="Digite seu Email"
                    type="email"
                    variant="outlined"
                    required
                />
                <TextField
                    sx={{
                        width: "24vw",
                        backgroundColor: colors.primary[400],
                        borderRadius: "8px"
                    }}
                    label="Digite sua Senha"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    required
                />
                <Typography variant="subtitle2" style={{
                    cursor: "pointer"
                }}>Esqueci minha senha</Typography>
                <button type="submit" style={{
                    backgroundColor: colors.blueAccent[200],
                    color: colors.primary[500],
                    padding: "8px 0",
                    borderRadius: "8px",
                    marginTop: "8px",
                    cursor: "pointer"
                }}><Typography variant="button" style={{ fontWeight: "600", fontSize: "1em" }}>Entrar</Typography></button>
            </form>

            <div style={{
                display: "flex",
                alignItems: "center",
                columnGap: "8px"
            }}>
                <Typography variant="subtitle2">Não tem uma conta?</Typography>
                <Link to="/signup">
                    <Typography variant="button" style={{
                        color: colors.blueAccent[200],
                        fontWeight: "700",
                        fontSize: "1em",
                        cursor: "pointer"
                    }}>Cadastre-se aqui!</Typography>
                </Link>
            </div>


        </div>
    )
};

export default Login;