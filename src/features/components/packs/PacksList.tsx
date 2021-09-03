import {PacksControls} from "./packsControls/packsControls";
import {AddPack} from "./AddPack";
import {PacksTable} from "./PackTable";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getPacksThunk} from "../../../main/bll/pacsReducer";

export const PacksList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPacksThunk())
    }, [])

    return (
        <div>
            <PacksControls/>
            <PacksContainer/>
        </div>
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

