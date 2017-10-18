const state = {
    userGroups: null,
    userGroupsTree: null,
};

const mutations = {
    SET_USER_GROUPS(state, params){
        state.userGroups = params;
    },
    SET_USER_GROUPS_TREE(state, params) {
        state.userGroupsTree = params;
    }
};

const actions = {
    SET_USER_GROUPS(context, params) {
        context.commit('SET_USER_GROUPS', params);
    },
    SET_USER_GROUPS_TREE(context, params) {
        context.commit('SET_USER_GROUPS_TREE', params);
    }
};

export default {
    state,
    mutations,
    actions,
}