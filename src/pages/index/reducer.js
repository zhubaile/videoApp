
const INITIAL_STATE = {
    dataList: [], //当前列表宝贝信息
    name: 'dd0902', // name
};

function indexReducer (state = INITIAL_STATE, actions) {
    switch (actions.type) {
        case actions.SET_INDEX_DATA:
            return { ...state, ...actions.data };
        case actions.CLEAR_INDEX_DATA:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
}

export default indexReducer;