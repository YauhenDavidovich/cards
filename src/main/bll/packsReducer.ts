import {Dispatch} from "redux";
import {cardsApi, GetCardsRequestType} from "../dll/cardsApi";
import {setCards} from "./cardsReducer";
import {CreatePackRequestType, packsApi, UpdatePackRequestType} from "../dll/packsApi";


let initialState: PacksDataType = {
    packs: [{
        _id: "23432234",
        name: 'NewPack',
        cardsCount: 2,
        updated: "No_data",
        created: "No_data",
        grade: 2,
        more_id: "No_data",
        path: "No_data",
        private: false,
        rating: 5,
        shots: 3,
        type: "No_data",
        user_id: "453453453",
        user_name: "user_name"
    }]


}

export type PacksType = {
    _id: string
    name: string
    cardsCount: number
    updated: string
    created: string
    grade: number
    more_id: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    user_id: string
    user_name: string


}

export type PacksDataType = {
    packs: Array<PacksType>
}

type ActionType = ReturnType<typeof setPacks>
    | ReturnType<typeof addPacks>
    | ReturnType<typeof updatePacks>
    | ReturnType<typeof deletePacks>


export const PacksReducer = (state: PacksDataType = initialState, action: ActionType): PacksDataType => {
    switch (action.type) {
        case "PACKS/SET-PACKS":
        case "PACKS/ADD-PACKS":
        case "PACKS/UPDATE-PACKS":
            return {...state, ...action.data}


        case "PACKS/DELETE-PACKS":
        return {...state, packs: state.packs.filter(p => p._id !==action.id)}

            // if (action.id) {
            //
            //     return action.packs.filter(p => p.user_id === action.id);
            // }
            // return action.packs;
        default:
            return state
    }
}

export const setPacks = (data: PacksType) => ({type: "PACKS/SET-PACKS", data} as const)
export const addPacks = (data: CreatePackRequestType) => ({type: "PACKS/ADD-PACKS", data} as const)
export const updatePacks = (data: UpdatePackRequestType) => ({type: "PACKS/UPDATE-PACKS", data} as const)
export const deletePacks = (id: string) => ({type: "PACKS/DELETE-PACKS", id} as const)


//thunks

export const getPacksThunk = () => (dispatch: Dispatch) => {
    const params = {pageCount: 7}
    packsApi.getPacks(params).then(res => {
        dispatch(setPacks(res.data))
    }).catch((e) => {
        // const error = e.response
        //     ? e.response.data.error
        //     : (e.message + ', more details in the console');
        console.log('Error: ', {...e})
    })
}

export const addPackThunk = (data: CreatePackRequestType) => (dispatch: Dispatch) => {
packsApi.addPack(data)
    .then(data => {
        dispatch(addPacks(data))

    }).catch((e) => {
    // const error = e.response
    //     ? e.response.data.error
    //     : (e.message + ', more details in the console');
    console.log('Error: ', {...e})
})
}

export const deletePackThunk = (id: string) => (dispatch: Dispatch) => {
    packsApi.deletePacks(id)
        .then(data => {
            dispatch(deletePacks(data.data.id))

        }).catch((e) => {
        // const error = e.response
        //     ? e.response.data.error
        //     : (e.message + ', more details in the console');
        console.log('Error: ', {...e})
    })

}

export const updatePackThunk = (data: UpdatePackRequestType) => (dispatch: Dispatch) => {
    packsApi.updatePack(data)
        .then(() => {
            dispatch(updatePacks(data))
        }).catch((e) => {
        // const error = e.response
        //     ? e.response.data.error
        //     : (e.message + ', more details in the console');
        console.log('Error: ', {...e})
    })

}




















