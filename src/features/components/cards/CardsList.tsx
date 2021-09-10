import React, {useCallback, MouseEvent, useRef, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../main/bll/store";
import {CardsType} from "../../../main/dll/cardsApi";
import {CreateCardThunk, DeleteCardsThunk, getCardsThunk, upDateCardThunk} from "../../../main/bll/cardsReducer";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {PackType} from "../../../main/dll/cardsPacksApi";
import {UpdateModalCards} from "./UpdateModalCards";


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

    const cardsPackId = useSelector<AppStateType, string>(state => state.cards.id)
    const idUser = useSelector<AppStateType, string>(state => state.login.idUser)
    const [showUpdateCards, setShowUpdateCards] = useState(false);
    const [currentCard, setCurrentCard] = useState(["id", "cardsPack_id"]);


    const addCardHandler = useCallback(() => {
        dispatch(CreateCardThunk(id))
    }, [])

    const deleteCardHandler = useCallback((id: string, cardsId: string) => {
        if (idUser === cards[0].user_id) {
            dispatch(DeleteCardsThunk(id))
        }
        dispatch(getCardsThunk(cardsId))

    }, [])

    const updateCardHandler = useCallback((id: string, cardsPack_id: string) => {
        setCurrentCard([id, cardsPack_id]);
        setShowUpdateCards(true)

        // dispatch(upDateCardThunk(id, cardsId, cardsPack_id, answer, question))

        // dispatch(getCardsThunk(cardsId))
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
                                <Button onClick={() => deleteCardHandler(cards._id, cards.cardsPack_id)}>
                                    Delete</Button>
                                <Button onClick={() => updateCardHandler(cards._id, cards.cardsPack_id)}>
                                    Update</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {showUpdateCards &&
            <UpdateModalCards
                show={showUpdateCards} setShow={setShowUpdateCards}
                cardsId={currentCard[0]} cardsPack_id={currentCard[1]}
            />}
        </TableContainer>
    );
}
