import { createContext, useState } from 'react';

export const FavoritesContext=createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {

    const [favoriteMealIds,setFavoriteMealIds]=useState([]);

    function addFavorite(id){
        setFavoriteMealIds((prev)=>{
            return [...prev,id]
        })
    }

    function removeFavorite(id){

        setFavoriteMealIds((removeId)=>{
            return removeId.filter((mealId) => mealId !== id)
        });

    };

    const value={
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;