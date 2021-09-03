import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPacks} from "../../../main/bll/pacsReducer";
import {actions, deletePacks, getPacks} from "../../../main/bll/pacsReducer";
import {AppStateType} from "../../../main/bll/store";
import { H3} from "../../../main/ui/commonStyle";
import MaterialTable from "material-table";
import {IconButton} from "@material-ui/core";
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Delete} from "@material-ui/icons";
import {PackType} from "../../../main/dll/cardsPacksApi";

export const PacksTable = () => {
    const dispatch = useDispatch()
    const {
        cardPacksTotalCount,
        cardPacks,
        pageSize
    } = useSelector((store: AppStateType) => store.packsReducer)

    useEffect(() => {
        dispatch(getPacks({pageCount: 100}));
    }, [dispatch])


    let pagesCount = Math.ceil(cardPacksTotalCount / pageSize)//data for paginator -
    console.log(cardPacks)
    return (
        <Container maxWidth="lg" style={{background: "white", height: "50vh"}}>
            <Grid container direction={"column"} justifyContent={"center"} alignItems="center" spacing={3}>
                {cardPacks!.length === 0 ? <H3>This user has no packs.</H3>
                    :
                    <>
                        <TablePacks cardPacks={cardPacks}/>
                        <p>Total count packs: {cardPacks.length}</p>
                        <p>Total count cards: {cardPacksTotalCount}</p>
                        <p>Total pages: {pagesCount}</p>
                    </>
                }
            </Grid>
        </Container>


    )
}


export const TablePacks = (props: any) => {
    const dispatch = useDispatch()


export type TablePacksPropsType = {
    cardPacks: Array<PackType>
}

export const TablePacks: React.FC<TablePacksPropsType> = ({cardPacks}) => {
    /*const dispatch = useDispatch();
    const deletePackItem = () => {
        dispatch(deletePack())
    }*/


    return (
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
            columns={[
                {title: 'Name', field: 'name'},
                {title: 'Cards count', field: 'cardsCount'},
                {title: 'Updated', field: 'updated'},
                {title: 'url', field: 'url'},
                {
                    title: "Delete pack",
                    field: "internal_action",
                    // editable: false,
                    render: (rowData) =>
                        rowData && (
                            <IconButton
                                color="secondary"
                                onClick={
                                    ()=>{console.log(rowData._id)
                                    dispatch(deletePacks(rowData._id))}
                                }
                            >

                                <DeleteIcon/>
                            </IconButton>
                        )
                },
                {
                    title: "Update pack",
                    field: "internal_action",
                    // editable: false,
                    render: (rowData) =>
                        rowData && (
                            <IconButton
                                color="secondary"
                                // onClick={console.log("delete")}
                            >

                                <UpdateIcon/>
                            </IconButton>
                        )
                }
            ]}
            data={[...props.cardPacks]}
        />
        </div>
    )
}
