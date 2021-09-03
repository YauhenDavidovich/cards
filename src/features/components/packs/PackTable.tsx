import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actions, getPacks} from "../../../main/bll/pacsReducer";
import {AppStateType} from "../../../main/bll/store";
import {FlexColumnCenter, FormWrapper, H3} from "../../../main/ui/commonStyle";
import MaterialTable from "material-table";
import {IconButton} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export const PacksTable = () => {
    const dispatch = useDispatch()
    const {cardPacksTotalCount, cardPacks, currentPage, pageSize} =
        useSelector((store: AppStateType) => store.packsReducer)

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

                        {/*<div>*/}
                        {/*    {cardPacks.map(pack => <div key={pack._id} {...pack}>{pack._id}</div>)}*/}
                        {/*</div>*/}


                    </>
                }
            </Grid>
        </Container>


    )
}


export const TablePacks = (props: any) => {
    return (
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
            columns={[
                {title: 'Name', field: 'name'},
                {title: 'Cards count', field: 'cardsCount'},
                {title: 'Updated', field: 'updated'},
                {title: 'url', field: 'url'},
                {
                    title: "Custom Add",
                    field: "internal_action",
                    // editable: false,
                    render: (rowData) =>
                        rowData && (
                            <IconButton
                                color="secondary"
                                // onClick={}
                            >

                                <AddBoxIcon/>
                            </IconButton>
                        )
                }
            ]}
            data={[...props.cardPacks]}
        />
        </div>
    )
}
