import React, { useState } from 'react';
import { IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import fan05 from "../../src/images/fan05.png";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function Favorite() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleIconClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <IconButton onClick={handleIconClick}>
            {isFavorite ? (
                <FavoriteOutlinedIcon fontSize="large" style={{ color: colors.primary[500] }} />
            ) : (
                <FavoriteBorderOutlinedIcon fontSize="large" style={{ color: colors.primary[500] }} />
            )}
        </IconButton>
    );
}

function ProductCards() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const renderDivs = () => {
        const divs = [];

        for (let i = 0; i < 6; i++) {
            divs.push(
                <div
                    key={i}
                    style={{
                        backgroundColor: "white",
                        color: colors.primary[900],
                        width: "14rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "8px",
                        borderRadius: "8px"
                    }}
                >
                    <img src={fan05} alt="Ventilador" style={{}} />
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <Typography variant="h6" style={{ lineHeight: "16px" }}>
                            Ventilador Vento Fresco Force Breeze Repelente 40cm
                        </Typography>
                        <Favorite />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            columnGap: "8px"
                        }}
                    >
                        <Typography variant="h4">R$ 599,99</Typography>
                        <Typography variant="body1">à vista</Typography>
                    </div>
                    <button
                        style={{
                            backgroundColor: colors.primary[500],
                            color: colors.primary[50],
                            padding: "8px 0",
                            borderRadius: "8px",
                            marginTop: "8px",
                            cursor: "pointer"
                        }}
                    >
                        <Typography variant="button">Comprar</Typography>
                    </button>
                </div>
            );
        }

        return divs;
    };

    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "24px"
    }}>{renderDivs()}</div>;
}


const BugFan = () => {
    return (

        <div style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "24px",
            padding: "0 40px",
            marginBottom: "24px"
        }}>
            <Typography variant='h2'>Ventiladores Repelente</Typography>
            <ProductCards />
        </div>

    )
};

export default BugFan;