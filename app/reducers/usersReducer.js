export const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER":
            return { ...action.payload };
        case "CLEAR_USER":
            return { ...action.payload };
        default:
            return state;
    }
};
