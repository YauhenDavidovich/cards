import {PacksControls} from "./packsControls/packsControls";
import {AddPack} from "./AddPack";
import {PacksTable} from "./PackTable";
import Grid from "@material-ui/core/Grid";

export const PacksList = () => {

    return (
        <Grid container direction={"row"} justifyContent={"space-between"} alignItems="center">
            <PacksControls/>
            <PacksContainer/>
        </Grid>
    )
}

export const PacksContainer = () => {

    return (
        <div>
            <AddPack/>
            <PacksTable/>
        </div>
    )
}

