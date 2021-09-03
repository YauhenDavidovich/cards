import {PacksControls} from "./packsControls/packsControls";
import {Button} from "../../../main/ui/commonStyle";
import {AddPack} from "./AddPack";
import {PacksTable} from "./PackTable";
import Pagination from "../Pagination/Pagination";
import SearchField from "../SearchField/SearchField";
export const PacksList = () => {

    return (
        <div>
            <SearchField />
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
            <Pagination />
        </div>
    )
}

