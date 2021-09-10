import Button from "@material-ui/core/Button";
import {Slider, Typography} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPacks} from "../../../../main/bll/pacsReducer";
import {AppStateType} from "../../../../main/bll/store";
import Grid from "@material-ui/core/Grid";

export const PacksControls = () => {
    const idUser = useSelector<AppStateType, string>(state =>
        state.login.idUser)
    const dispatch = useDispatch()

    const [value, setValue] = useState([0, 10]);
    const [min, max] = [value[0], value[1]]

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
        dispatch(getPacks({min:min, max: max}))
        console.log(newValue)
    };

    console.log(idUser);

    return (
        <div style={{
            backgroundColor: 'white',
            marginLeft: 20,
            marginRight: 20,
        }}>
            <Grid container direction={"column"}>
                <Grid item xs direction={"row"}>
                    <Typography id="range-slider" gutterBottom>
                        Show packs
                    </Typography>
                    <Button onClick={() => {
                        dispatch(getPacks({user_id: idUser, min: min, max: max }))
                    }} variant="contained" color="primary">My</Button>
                    <Button onClick={() => {
                        dispatch(getPacks({min: min, max: max}))
                    }} variant="contained" color="secondary">All</Button>
                </Grid>
                <Grid container spacing={1} direction={"column"}>
                    <Grid item xs>
                        <Typography id="range-slider" gutterBottom>
                            Number of cards
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={value}
                            onChangeCommitted={handleChange}
                            valueLabelDisplay="on"
                            aria-labelledby="range-slider"
                            min={3}
                            max={10}
                        />
                    </Grid>
                </Grid>


            </Grid>
        </div>

    )
}
