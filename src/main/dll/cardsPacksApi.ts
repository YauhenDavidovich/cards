import axios from "axios";
/*
const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0',
    withCredentials: true
})*/

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
});

export type PackType = {
    _id: string
    user_id: string
    user_name: string
    private: boolean
    name: string
    path: string
    grade: number
    shots: number
    cardsCount: number
    type: string
    rating: number
    created: string
    updated: string
    more_id: string
    __v: number
}

export type PacksResponseType = {
    cardPacks: PackType[]
    page: number
    pageCount: number
    cardPacksTotalCount: number
    minCardsCount: number
    maxCardsCount: number
    token: string
    tokenDeathTime: number
}

export type PacksRequestType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: string
    page?: number
    pageCount?: number
    user_id?: string
}

export type CardsPackType = {
    cardsPack: {
        name: string
        path?: string
        grade?: number
        shots?: number
        rating?: number
        deckCover?: string
        private?: boolean
        type?: string
    }
    }

export const cardsPacksApi = {
    getPacks(params: PacksRequestType) {
        return instance.get<PacksResponseType>('cards/pack', {
            params: {...params}
        }).then(response => response.data);
    },
    addPack(data: CardsPackType) {
        return instance.post<PacksResponseType>('cards/pack', data)
    },
    deletePack(packId: string) {
        return instance.delete<PacksResponseType>('cards/pack', {params: {id: packId}})
    },
    updatePack(packId: string, name: string) {
        return instance.put<PacksResponseType>('cards/pack', {packId, name})
    }
}

