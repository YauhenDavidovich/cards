import {PacksControls} from "./packsControls/packsControls";
import {Button} from "../../../main/ui/commonStyle";
import {AddPack} from "./AddPack";
import {PacksTable} from "./PackTable";

export const PacksList = () => {

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

