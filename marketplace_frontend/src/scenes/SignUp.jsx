import { useTheme, TextField, Typography } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";


const SignUp = () => {
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
            <Typography variant="subtitle1">Por favor, forneça seus dados pessoais para cadastro</Typography>
            <form style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "16px",
                width: "32vw"

            }}>

                <TextField
                    sx={{
                        width: "32vw",
                        backgroundColor: colors.primary[400],
                        borderRadius: "8px"
                    }}
                    label="Digite seu Nome"
                    type="name"
                    variant="outlined"
                    required
                />
                <TextField
                    sx={{
                        width: "32vw",
                        backgroundColor: colors.primary[400],
                        borderRadius: "8px"
                    }}
                    label="Digite seu CPF"
                    type="number"
                    variant="outlined"
                    required
                />

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "8px"
                }}>
                    <TextField
                        sx={{
                            width: "24vw",
                            backgroundColor: colors.primary[400],
                            borderRadius: "8px"
                        }}
                        label="Digite seu Email"
                        type="email"
                        autoComplete="current-email"
                        variant="outlined"
                        required
                    />
                    <TextField
                        sx={{
                            width: "24vw",
                            backgroundColor: colors.primary[400],
                            borderRadius: "8px"
                        }}
                        label="Confirme seu Email"
                        type="email"
                        autoComplete="current-email"
                        variant="outlined"
                        required
                    />
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "8px"
                }}>
                    <TextField
                        sx={{
                            width: "24vw",
                            backgroundColor: colors.primary[400],
                            borderRadius: "8px"
                        }}
                        label="Digite sua Senha"
                        type="password"
                        variant="outlined"
                        required
                    />
                    <TextField
                        sx={{
                            width: "24vw",
                            backgroundColor: colors.primary[400],
                            borderRadius: "8px"
                        }}
                        label="Confirme sua Senha"
                        type="password"
                        variant="outlined"
                        required
                    />
                </div>


                <button type="submit" style={{
                    backgroundColor: colors.blueAccent[550],
                    color: colors.primary[50],
                    padding: "8px 0",
                    borderRadius: "8px",
                    marginTop: "8px",
                    cursor: "pointer"
                }}><Typography variant="button">Criar Conta</Typography></button>
            </form>

            <div style={{
                display: "flex",
                alignItems: "center",
                columnGap: "8px"
            }}>
                <Typography variant="subtitle2">Já tem uma conta?</Typography>
                <Link to="/login">
                    <Typography variant="button" style={{
                        color: colors.blueAccent[550],
                        fontWeight: "700",
                        fontSize: "1em",
                        cursor: "pointer"
                    }}>Entre aqui!</Typography>
                </Link>
            </div>


        </div>
    )
};

export default SignUp;