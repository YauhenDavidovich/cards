import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPacks} from "../../../main/bll/pacsReducer";
import {AppStateType} from "../../../main/bll/store";
import {Pagination} from "@material-ui/lab";
import {H3} from "../../../main/ui/commonStyle";

export const PacksTable = () => {
    const dispatch = useDispatch()
    const {cardsTotalCount, cardPacks, page, pageCount} =
        useSelector((store: AppStateType) => store.packsReducer)

    useEffect(() => {
        dispatch(getPacks({pageCount: 100}));
    }, [dispatch])

    return (
        <>
            <div>
                {cardPacks!.length === 0 ? <H3 >This user has no packs.</H3>
                    :
                    <>
                        <p>Total count packs: {cardPacks.length}</p>
                        <p>Total count cards: {cardsTotalCount}</p>

                    </>
                }
            </div>
        </>


)
}
