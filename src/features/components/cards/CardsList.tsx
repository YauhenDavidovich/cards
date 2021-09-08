import React, {useCallback, MouseEvent, useRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../main/bll/store";
import {CardsType, CreateCardRequestType, UpdateCardRequestType} from "../../../main/dll/cardsApi";
import {CreateCardThunk, DeleteCardsThunk, getCardsThunk, upDateCardThunk} from "../../../main/bll/cardsReducer";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useParams} from "react-router-dom";


export const CardsList = () => {
    const dispatch = useDispatch();
    const cards = useSelector<AppStateType, Array<CardsType>>(state => state.cards.cards);
    interface ParamTypes {
        id: string
    }
    const {id} = useParams<ParamTypes>();
    useEffect(() => {
        dispatch(getCardsThunk(id));
    }, [id])


    const addCardHandler = useCallback(() => {
        const newCard: CreateCardRequestType = {
            cardsPack_id: id,
            grade: 1
        }
        //{}{
        //     cardsPack_id: string
        //     question?: string
        //     answer?: string
        //     grade: number
        //     shots?: number
        //     rating?: number
        //     type?: string
        // }
        return dispatch(CreateCardThunk(newCard));
    }, [])

    const deleteCardHandler = useCallback((e: MouseEvent<HTMLButtonElement>, id: string) => {
        dispatch(DeleteCardsThunk(id))

    }, [])

    const updateCardHandler = useCallback((e, id: string) => {
        const updatedCard: UpdateCardRequestType = {
            _id: id
        }
        dispatch(upDateCardThunk(updatedCard))

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
                                <Button onClick={e => deleteCardHandler(e, cards._id)}>
                                    Delete</Button>
                                <Button onClick={e => updateCardHandler(e, cards._id)}>
                                    Update</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
