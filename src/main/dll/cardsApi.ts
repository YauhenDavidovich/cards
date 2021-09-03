import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

type GetCardsRequestType = {
    cardsPack_id: number
    cardAnswer?: string
    cardQuestion?: string
    min?: number
    max?: number
    sortCards?: number
    page?: number
    pageCount?: number
}

type GetResponseType = {
    cards: CardsType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string

}

type CardsType = {
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
}

type CreateCardRequestType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    rating?: number
    type?: string
}

type UpdateCardRequestType = {
    _id: string
    question?: string
    answer?: string
    comments?: string
}


export const cardsApi = {
    getCards(params: GetCardsRequestType) {
        return instance.get<GetResponseType>('/cards/card', {
            params: {...params}
        }).then(response => response.data.cards);
    },
    deleteCard(id: string) {
        return instance.delete(`cards/card?id=${id}`);
    },
    createCard(card: CreateCardRequestType) {
        return instance.post('cards/card', {card}).then(response => response.data);
    },
    updateCard(putCard: UpdateCardRequestType) {
        return instance.put('cards/card', {putCard});
    }
}
