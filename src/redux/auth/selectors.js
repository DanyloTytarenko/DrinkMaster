export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectSubscribe = state => state.auth.isSubscribed;

export const selectId = state => state.auth.id;

export const selectToken = state => state.auth.accessToken