import { Typography, Autocomplete, Checkbox, TextField, useTheme } from "@mui/material";
import { tokens } from "../theme";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


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
    { title: 'Ventilador Repelente' },
    { title: 'Ventilador de 2 em 1' }
]

const Menu = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div
            className="row"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                columnGap: "4vw",
                padding: "0 20px 20px 20px",
                marginBottom: "24px",
                borderBottom: `4px solid ${colors.blueAccent[550]}`
            }}
        >
            <CheckboxesTags />
            <Typography variant="h5" style={{ textTransform: "uppercase", cursor: "pointer" }}>Produtos</Typography>
            <Typography variant="h5" style={{ textTransform: "uppercase", cursor: "pointer" }}>Acessórios</Typography>
            <Typography variant="h5" style={{ textTransform: "uppercase", cursor: "pointer" }}>Promoções</Typography>
            <Typography variant="h5" style={{ textTransform: "uppercase", cursor: "pointer" }}>Baixe o app</Typography>
            <Typography variant="h5" style={{ textTransform: "uppercase", cursor: "pointer" }}>Sobre Nós</Typography>
        </div>
    )
};

export default Menu;