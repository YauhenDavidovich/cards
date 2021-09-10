import {PacksControls} from "./packsControls/packsControls";
import Grid from "@material-ui/core/Grid";
import {PacksTable} from "./PackTable";
import ModalInput from "../modals/ModalInput";
import React, {ChangeEvent, useState} from "react";
import {Button} from "../../../main/ui/commonStyle";
import {useDispatch} from "react-redux";
import {addPack} from "../../../main/bll/pacsReducer";

export const PacksList = () => {

    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const addNewPack = () => {
        dispatch(addPack(value))
        setActive(false)
    }

    return (
        <div>
            <Grid container spacing={3} justifyContent={"space-between"} alignItems="center">
                <Grid item xs={3}><PacksControls/></Grid>
                <Button onClick={() => setActive(true)}>Add Pack</Button>
                <Grid item xs={10}><PacksContainer/></Grid>
                <ModalInput active={active} setActive={setActive}>
                    <form>
                        <label htmlFor="addPack">Add your new pack here...</label>
                        <input
                            type="text"
                            id={"addPack"}
                            onChange={onChange}
                            value={value}
                        />
                        <button
                            onClick={addNewPack}
                        >Add Pack
                        </button>
                    </form>
                </ModalInput>

            </Grid>
        </div>

    )
}


export const PacksContainer = () => {

    return (
        <Grid container spacing={2} direction={"column"}>
            <Grid item xs ><PacksTable/></Grid>
        </Grid>
    )
}

