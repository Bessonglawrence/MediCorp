import { useContext } from "react";
import { InvoiceContext } from "../components/context/InvoiceContext";

export const useInvoiceContext = () => {
    const context = useContext(InvoiceContext);

    if(!context){
        throw Error('useInvoiceContext must be use inside a WorkoutContextProvider')
    }
    return context;
}
