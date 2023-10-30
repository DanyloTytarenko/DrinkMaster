export const selectOwnDrinks = (state) => state.ownDrinks.items;

export const selectFavoriteDrinks = (state) => state.favoriteDrinks.items;

export const selectIsLoadingFavorite = (state) =>
  state.favoriteDrinks.isLoading;

export const selectIsLoadingOwn = (state) => state.ownDrinks.isLoading;

export const selectErrorOwn = (state) => state.ownDrinks.error;

export const selectErrorFavorite = (state) => state.favoriteDrinks.error;

export const selectDrinkDetails = (state) => state.drinkDetails.drinkById;
export const selectDrinkDetailsIsLoadin = (state) =>
  state.drinkDetails.IsLoadin;
export const selectDrinkDetailsError = (state) => state.drinkDetails.error;
