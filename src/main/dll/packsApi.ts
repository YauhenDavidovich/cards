import axios from "axios";

/*const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0',
    withCredentials: true,
})*/

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
});

export const packsApi = {
    getPacks(params?: GetPacksRequestType) {
        return instance.get('/cards/pack', {
            params: {...params}
        }).then(response => response.data);
    },
    deletePacks(id: string) {
        return instance.delete(`/cards/pack?id=${id}`).then(response => response.data);
    },
    addPack(data: CreatePackRequestType) {
        return instance.post('/cards/pack', {data}).then(response => response.data);
    },
    updatePack(data:UpdatePackRequestType) {
        return instance.put('/cards/pack', {data}).then(response => response.data);
    }
}

export type GetPacksRequestType = {
    user_id?: string
    min?: number
    max?: number
    sortCards?: number
    page?: number
    pageCount?: number
}

export type CreatePackRequestType = {
    name: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: string
    private?: boolean
    type?: string
}

export type UpdatePackRequestType = {
    _id: string
    name?: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: string
    private?: boolean
    type?: string
}


// type PacksType = {
//     cardsPack_id: string
//     _id: string
//     user_id: string
//     type: string
//     answer: string
//     question: string
//     rating: number
//     shots: number
//     created: string
//     updated: string
// }