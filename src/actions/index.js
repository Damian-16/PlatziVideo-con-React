//Actions
export const setFavorite = payload =>({//payload es la informacion que le transimitimos
    type:'SET_FAVORITE',//nombre de descripcion con la que vamos a identificar lo que estamos haciendo
    payload,
});

export const deleteFavorite = payload =>({
    type:'DELETE_FAVORITE',
    payload,
});
export const loginRequest = payload => ({
    type:'LOGIN_REQUEST',
    payload,
})
