

let initialState = {
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
    user_name: "user_name",
};

export type PackType = {
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

export const PacksReducer = (state = initialState, action: any): PackType => {
    switch (action.type) {
        case "PACKS/SET-PACKS":
            if (action.user_id) {
                // return action.packs.filter(pack => pack.user_id === action.user_id);
            }
            return action.packs;
        default:
            return state
    }
}
