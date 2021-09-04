import React, {ChangeEvent, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {AppStateType} from "../../../main/bll/store";



export const PacksTable =  React.memo (() => {
    const dispatch = useDispatch()
    const packCard = useSelector<AppStateType, Array<PacksType>>(state => state.packs.packs)
    const addPackHandler = useCallback(() => {
        dispatch(addPackThunk({name: 'New Pack Name'}))
    }, [])

    const updateHandler = useCallback((e, id: string) => {
        dispatch(updatePackThunk({_id: id, name:''}))
    }, [])

    const  deleteHandler = useCallback((e, id: string) => {
        dispatch(deletePackThunk(id))

    }, [])




    return (
        <Paper>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Cards</TableCell>
                            <TableCell align="right">Last Update</TableCell>
                            <TableCell align="right">Created by</TableCell>
                            <TableCell align="right">Actions</TableCell>
                            <TableCell align="right">
                                <Button onClick={addPackHandler}>Add new pack</Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {packCard.map((pack) => (
                           <TableRow key={pack.updated}>
                               <TableCell align="right">{pack.cardsCount}</TableCell>
                               <TableCell align="right">{pack.updated.slice(0, 10)}</TableCell>
                               <TableCell align="right">{pack.user_name}</TableCell>
                               <TableCell align="right">
                                   <Button onClick={e => deleteHandler(e,pack._id)}>
                                       Delete</Button>
                                   <Button onClick={e => updateHandler(e, pack._id)}>
                                       Update</Button>

                               </TableCell>

                           </TableRow>



                        ))}
                    </TableBody>


                </Table>

            </TableContainer>

        </Paper>

    )
})
