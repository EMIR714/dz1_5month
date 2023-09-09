const initialState = {
    title: "old title",
    aboutTitle: "old About title",
    contactTitle: ''
} 

export default function reducer (state = initialState, action) {
    if(action.type === "CHANGE_TITLE") {
        return {...state, title: "NEW_TITLE"}
    }
    else if(action.type === "CHANGE_ABOUT_TITLE") {
        return {...state, aboutTitle: "FJHFHVKHVF"}
    }
    else if(action.type === "WITH_PARAMS") {
        return {...state, contactTitle: action.payload}
    }
    else if(action.type === "FROM_INPUT") {
        return {...state, contactTitle: action.payload}
    }



    return state
}