import { AuthContext } from "../components/context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw Error('useAuthContext must be use inside a AuthContextProvider')
    }
    return context;
}