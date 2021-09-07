import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
})

export type GetCardsRequestType = {
    cardsPack_id: string
    cardAnswer?: string
    cardQuestion?: string
    min?: number
    max?: number
    sortCards?: number
    page?: number
    pageCount?: number
}

export type GetCardsResponseType = {
    cards: CardsType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
    user_name: string
    id: string
}



export type CardsType = {
    cardsPack_id: string
    _id: string
    user_id: string
    type: string
    answer: string
    question: string
    rating: number
    shots: number
    created: string
    updated: string
    grade: number

}
export type CreateCardRequestType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade: number
    shots?: number
    rating?: number
    type?: string
}

export type UpdateCardRequestType = {
    _id: string
    question?: string
    answer?: string
    comments?: string
}



export const cardsApi = {
    getCards(cardsId: string) {
        return instance.get<GetCardsResponseType>(`/cards/card?cardsPack_id=${cardsId}`
            // params: {...params}

        ).then(response => response.data);
    },
    deleteCard(id: string) {
        return instance.delete(`/cards/card?id=${id}`);
    },
    createCard(card: CreateCardRequestType) {
        return instance.post('/cards/card', {card}).then(response => response.data);
    },
    updateCard(card: UpdateCardRequestType) {
        return instance.put('/cards/card', {card}).then(response => response.data);
    }
}
