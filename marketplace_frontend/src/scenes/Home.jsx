import Menu from "../components/Menu";
import TableFan from "../components/TableFan";
import ColumnFan from "../components/ColumnFan";
import CeilingFan from "../components/CeilingFan";
import WallFan from "../components/WallFan";
import BugFan from "../components/BugFan";
import BiFan from "../components/BiFan";

const Home = () => {
    return (
        <div>
            <Menu />
            <TableFan />
            <ColumnFan />
            <CeilingFan />
            <WallFan />
            <BugFan />
            <BiFan />
        </div>
    )
};

export default Home;