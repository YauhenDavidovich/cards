import axios from "axios";
/*
const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0',
    withCredentials: true
})*/

const instanceRemote = axios.create({
    baseURL:
        'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

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

export type RequestAddPackType = {
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
        return instanceRemote.get<PacksResponseType>('cards/pack', {
            params: {...params, pageCount: 300}
        }).then(response => response.data);
    },
    addPack(pack: RequestAddPackType) {
        return instanceRemote.post<PacksResponseType>('cards/pack', {...pack})
    },
    deletePack(packId: string) {
        return instanceRemote.delete<PacksResponseType>('cards/pack', {params: {id: packId}})
    },
    updatePack(packId: string, name: string) {
        return instanceRemote.put<PacksResponseType>('cards/pack', {packId, name})
    }
}

