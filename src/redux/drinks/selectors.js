export const selectOwnDrinks = (state) => state.ownDrinks.items;

export const selectFavoriteDrinks = (state) => state.favoriteDrinks.items;

export const selectFavoriteDrinksLimit = (state) => state.favoriteDrinks.per_page;

export const selectFavoriteDrinksMax = (state) => state.favoriteDrinks.max_page;

export const selectOwnDrinksLimit = (state) => state.ownDrinks.per_page;

export const selectOwnDrinksMax = (state) => state.ownDrinks.max_page;

export const selectPopularDrinks = (state) => state.popularDrinks.items;

export const selectIsLoadingFavorite = (state) =>
  state.favoriteDrinks.isLoading;

export const selectIsLoadingOwn = (state) => state.ownDrinks.isLoading;

export const selectErrorOwn = (state) => state.ownDrinks.error;

export const selectErrorFavorite = (state) => state.favoriteDrinks.error;

export const selectForm = (state) => state.form;

export const selectCategory = (state) => state.category.items;
export const selectGlass = (state) => state.glass.items;
export const selectIngredient = (state) => state.ingredient.items;

export const selectDrinkById = (state) => state.drinkDetails.drinkById;
export const selectDrinkDetailsIsLoading = (state) =>
  state.drinkDetails.IsLoading;
export const selectDrinkDetailsError = (state) => state.drinkDetails.error;
