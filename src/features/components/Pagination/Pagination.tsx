import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../main/bll/store";
import {getPacks, NumberOfPacksType} from "./paginationReducer";
import {SinglePackType} from "../../../main/bll/pacsReducer";
import s from "./Pagination.module.css";
import {v1} from "uuid";


function Pagination() {

    const itemsOnPage = useSelector<AppStateType, NumberOfPacksType>(state => state.pagination.itemsOnPage);
    const currentPage = useSelector<AppStateType, number>(state => state.pagination.currentPage);
    const packs = useSelector<AppStateType, SinglePackType[]>(state => state.packs);
    const totalPacksCount = useSelector<AppStateType, number>(state => state.pagination.packsTotalCount);
    const dispatch = useDispatch();

    let pagesCount = Math.ceil(totalPacksCount / itemsOnPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const onPageChange = () => {
        dispatch(getPacks(currentPage, itemsOnPage));
    }

    console.log("hello I am pagination");
    console.log(totalPacksCount);
    console.log(packs);

    return (
        <div>
            {pages.map(page => {
                return <span key={v1()}
                             className={currentPage === page ? s.paginationBttns : ""}
                             onClick={onPageChange}
                >{page}</span>
            })}
        </div>
    );
}

export default Pagination;