import Button from "@material-ui/core/Button";
import {Slider, Typography} from "@material-ui/core";
import {useState} from "react";
import {useDispatch} from "react-redux";

function valuetext(value: number) {
    return value;
}

export const PacksControls = () => {

    const [value, setValue] = useState([0, 9]);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <Button variant="contained" color="primary">My</Button>
                <Button variant="contained" color="secondary">All</Button>
            </div>
            <Typography id="range-slider" gutterBottom>
                Number of cards
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                // getAriaValueText={valuetext}
            />
        </div>
    )
}
