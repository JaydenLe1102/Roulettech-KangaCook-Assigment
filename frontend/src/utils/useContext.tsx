import React, { createContext, ReactNode } from 'react';
import { RecipeResponse } from '../types/Recipe.interface';



type GlobalContextType = {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	recipes: RecipeResponse[];
	setRecipes: (recipes: RecipeResponse[]) => void;
  savedRecipes: RecipeResponse[];
  setSavedRecipes: (savedRecipes: RecipeResponse[]) => void;
}



// Define the shape of the context
//type GlobalContextType = ReturnType<typeof useContextList>;

// Create the context with a default value of undefined
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Modify the provider component to accept a value prop
const GlobalProvider = ({ children, value }: { children: ReactNode; value: GlobalContextType }) => {
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
const useGlobal = () => {
  const context = React.useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};

export { GlobalProvider, useGlobal };
