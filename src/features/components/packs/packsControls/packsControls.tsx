import Button from "@material-ui/core/Button";
import {Slider, Typography} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPacks} from "../../../../main/bll/pacsReducer";
import {AppStateType} from "../../../../main/bll/store";



export const PacksControls = () => {
    const idUser = useSelector<AppStateType, string>(state =>
        state.login.idUser)
    const dispatch = useDispatch()

    const [value, setValue] = useState([0, 9]);
    const [min, max] = [value[0], value[1]]

    useEffect(() => {
        dispatch(getPacks({min:min, max: max}))
    }, [value])

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
        console.log(newValue)
    };

    return (
        <div>
            <div>
                <Button onClick={() => {
                    dispatch(getPacks({user_id: idUser}))
                }} variant="contained" color="primary">My</Button>
                <Button onClick={() => {
                    dispatch(getPacks({}))
                }} variant="contained" color="secondary">All</Button>
            </div>
            <Typography id="range-slider" gutterBottom>
                Number of cards
            </Typography>
            <Slider
                value={value}
                onChangeCommitted={handleChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                min={3}
                max={9}
            />
        </div>
    )
}
