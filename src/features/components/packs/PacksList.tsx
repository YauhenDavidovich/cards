import {PacksControls} from "./packsControls/packsControls";
import {AddPack} from "./AddPack";
import Grid from "@material-ui/core/Grid";
import {PacksTable} from "./PackTable";

export const PacksList = () => {

    return (
        <Grid container spacing={3}  justifyContent={"space-between"} alignItems="center">
            <Grid item xs={3}><PacksControls/></Grid>
            <Grid item xs={10}><PacksContainer/></Grid>
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

