import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../main/bll/store";
import {CardsType} from "../../../main/dll/cardsApi";
import {CreateCardThunk, DeleteCardsThunk, upDateCardThunk} from "../../../main/bll/cardsReducer";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";


export const CardsList = () => {
    const dispatch = useDispatch();
    const cards = useSelector<AppStateType, Array<CardsType>>(state => state.cards.cards);
    const cardsPackId = useSelector<AppStateType>(state => state.cards.id)


    const addCardHandler = useCallback(() => {
        dispatch(CreateCardThunk)
    }, [])

    const deleteCardHandler = useCallback((id: string) => {
        dispatch(DeleteCardsThunk(id))

    }, [])

    const updateCardHandler = useCallback((_id: string) => {
        // dispatch(upDateCardThunk(_id))

    }, [])

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Question</TableCell>
                        <TableCell align="right">answer</TableCell>
                        <TableCell align="right">Grade</TableCell>
                        <TableCell align="right">Update</TableCell>

                        <Button variant="contained" onClick={addCardHandler}>
                            Add New Card
                        </Button>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {cards.map((cards) => (
                        <TableRow key={cards.updated}>
                            <TableCell align="right">{cards.question}</TableCell>
                            <TableCell align="right">{cards.answer}</TableCell>
                            <TableCell align="right">{cards.updated.slice(0, 10)}</TableCell>
                            <TableCell align="right">{cards.grade}</TableCell>
                            <TableCell align="right">
                                <Button onClick={e => deleteCardHandler(cards._id)}>
                                    Delete</Button>
                                <Button onClick={e => updateCardHandler(cards._id)}>
                                    Update</Button>

                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}
