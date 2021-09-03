import axios from "axios";
import {NumberOfPacksType} from "../../features/components/Pagination/paginationReducer";
import {SinglePackType} from "../bll/pacsReducer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
});

export const packsApi = {
    getPacks(page: number, pageCount: NumberOfPacksType) {
        return instance.get<ResponseType>('cards/pack', {params: {
            page: 1, pageCount: 4
            }
        })
    }
}

export type RequestPacksType = {
    min?: number
    max?: number
    packName?: string
    page: number
    pageCount: NumberOfPacksType
    sortPacks?: string //0updated
    user_id: string
}

export  type ResponseType = {
    cardPacks: Array<SinglePackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: NumberOfPacksType
}



