import {PacksControls} from "./packsControls/packsControls";
import {AddPack} from "./AddPack/AddPack";
import Grid from "@material-ui/core/Grid";
import {PacksTable} from "./PackTable";

export const PacksList = () => {

    return (
        <Grid container spacing={1}  justifyContent={"space-between"} alignItems="flex-start">
            <Grid item xs={4} sm={2} md={4} lg={4} xl={3}><PacksControls/></Grid>
            <Grid item xs={6} sm={10} md={8} lg={9} xl={9}><PacksContainer/></Grid>
        </Grid>
    )
}


export const PacksContainer = () => {

    return (
        <Grid container spacing={2} direction={"column"}>
            <Grid item xs ><AddPack/></Grid>
            <Grid item xs ><PacksTable/></Grid>
        </Grid>
    )
}

