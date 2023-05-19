import React, { useState } from 'react';
import { IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from 'react-router-dom';
import fan06 from "../../src/images/fan06.jpg";
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
                    <img src={fan06} alt="Ventilador" style={{}} />
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <Typography variant="h6" style={{ lineHeight: "16px" }}>
                            Ventilador Vento Fresco Force Breeze 2em1
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
                        <Typography variant="h4">R$ 699,99</Typography>
                        <Typography variant="body1">à vista</Typography>
                    </div>
                    <Link to="bifanpg" target='_blank' style={{
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: colors.primary[500],
                        color: colors.primary[50],
                        padding: "8px 0",
                        borderRadius: "8px",
                        marginTop: "8px",
                        cursor: "pointer"
                    }}>
                        <Typography variant="button" style={{ fontWeight: "600", fontSize: "1em" }}>Comprar</Typography>
                    </Link>
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


const BiFan = () => {
    return (

        <div style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "24px",
            padding: "0 40px",
            marginBottom: "24px"
        }}>
            <Typography variant='h2'>Ventiladores 2 em 1</Typography>
            <ProductCards />
        </div>

    )
};

export default BiFan;