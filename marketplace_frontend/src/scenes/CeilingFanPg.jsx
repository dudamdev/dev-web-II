import { Typography, styled } from "@mui/material";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, useTheme, TextField, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { tokens } from "../theme";
import { useState } from "react";
import fan03 from "../../src/images/fan03.png";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Menu from "../components/Menu";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(item, desc) {
    return { item, desc };
}

const rows = [
    createData('Conteúdo da Embalagem', "1 ventilador + 1 manual de instruções"),
    createData('Cor', "Preto e Cinza"),
    createData('Potência (Watts)', "100W"),
    createData('Número de Velocidades', "5"),
    createData('Garantia', "12 meses por defeitos de fabricação"),
    createData('Tipo de Material', "Polipropileno - PP"),
    createData('Peso', "1.5kg"),
];

function CustomizedTables() {
    return (

        <Table sx={{ width: "80vw" }} aria-label="customized table">

            <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.item}>
                        <TableCell component="th" scope="row">
                            <Typography variant="body1">{row.item}</Typography>
                        </TableCell>
                        <TableCell align="left"><Typography variant="body1">{row.desc}</Typography></TableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>

    );
}


function VoltageRadio() {
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" style={{ color: "white" }}>Selecione a voltagem:</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="110V" control={<Radio style={{ color: "white" }} />} label="110V" />
                <FormControlLabel value="127V" control={<Radio style={{ color: "white" }} />} label="127V" />
                <FormControlLabel value="220V" control={<Radio style={{ color: "white" }} />} label="220V" />

            </RadioGroup>
        </FormControl>
    );
}

function Favorite() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleButtonClick = () => {
        setIsFavorite(!isFavorite);
    };

    const buttonStyle = {
        width: '8vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '8px',
        border: `2px solid ${colors.blueAccent[200]}`,
        backgroundColor: isFavorite ? colors.blueAccent[200] : 'transparent',
        color: isFavorite ? colors.primary[500] : colors.blueAccent[200],
        padding: '16px 0',
        borderRadius: '8px',
        marginTop: '8px',
        cursor: 'pointer',
    };

    return (
        <button onClick={handleButtonClick} style={buttonStyle}>
            {isFavorite ? (
                <FavoriteOutlinedIcon fontSize="large" style={{ color: colors.primary[500] }} />
            ) : (
                <FavoriteBorderOutlinedIcon fontSize="large" style={{ color: colors.blueAccent[200] }} />
            )}
            Favoritar
        </button>
    );
}



const CeilingFanPg = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <Menu />
            <div style={{
                width: "80vw",
                display: "flex",
                flexDirection: "column",
                margin: "0 auto 40px auto",
                rowGap: "60px",
            }}>
                <div style={{
                    display: "flex",
                    columnGap: "60px"
                }}>
                    <img src={fan03} alt="Ventilador de Mesa" style={{
                        width: "500px",
                        borderRadius: "8px"
                    }} />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly"
                    }}>
                        <Typography variant="h2">Ventilador Vento Fresco Force Breeze Teto 50cm</Typography>
                        <div>
                            <Typography variant="h5" style={{ color: colors.blueAccent[200], fontWeight: "600" }}>O mais forte da categoria com até 20% de economia</Typography>
                            <Typography variant="body1">Ventilador de Teto Vento Fresco Force Breeze, perfeito para qualquer tipo de ambiente.</Typography>
                            <Typography variant="body1">Possui 3 velocidades e 50cm de diâmetro.</Typography>
                        </div>
                        <VoltageRadio />
                        <div>
                            <div style={{
                                display: "flex",
                                alignItems: "baseline",
                                columnGap: "8px"
                            }}>
                                <Typography variant="h3" style={{ color: colors.blueAccent[200], fontWeight: "700", fontSize: "2em" }}>R$ 499,99</Typography>
                                <Typography variant="body1">à vista</Typography>
                            </div>
                            <Typography variant="body1">ou até <strong>5 x de R$ 59,99</strong> sem juros</Typography>
                        </div>
                        <div style={{
                            display: "flex",
                            columnGap: "16px"
                        }}>
                            <button style={{
                                width: "20vw",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                columnGap: "8px",
                                backgroundColor: colors.blueAccent[200],
                                color: colors.primary[500],
                                padding: "16px 0",
                                borderRadius: "8px",
                                marginTop: "8px",
                                cursor: "pointer"
                            }}>
                                <ShoppingCartOutlinedIcon />
                                <Typography variant="button" style={{ fontWeight: "600", fontSize: "1em" }}>Comprar agora</Typography>
                            </button>
                            <Favorite />
                        </div>
                        <Typography variant="body2">Calcule o frete e o prazo de entrega:</Typography>
                        <div style={{
                            display: "flex",
                            alignItems: "baseline",
                        }}>
                            <TextField
                                sx={{
                                    width: "12vw",
                                    backgroundColor: colors.primary[400],
                                    border: "none"
                                }}
                                label="Informe seu CEP"
                                type="number"
                                variant="outlined"
                            />
                            <button style={{
                                width: "17vw",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                columnGap: "8px",
                                backgroundColor: colors.primary[300],
                                color: colors.primary[50],
                                padding: "14px 0",
                                borderRadius: "0 8px 8px 0",
                                marginTop: "8px",
                                cursor: "pointer"
                            }}>
                                <Typography variant="button" style={{ fontWeight: "600", fontSize: "1em" }}>consultar</Typography>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography variant="h3" style={{ marginBottom: "24px" }}>Especificações <span style={{ color: colors.blueAccent[200], fontWeight: "600" }}>do Produto</span></Typography>
                    <CustomizedTables />
                </div>
            </div>

        </>
    )
};

export default CeilingFanPg;