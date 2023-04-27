import { createContext, useReducer } from "react";

export const InvoiceContext = createContext();

const InvoiceReducer = (state, action) => {
    switch(action.type){
        case 'SET_INVOICES':
            return {
                invoices : action.payload
            }
        case 'CREATE_INVOICE':
            return {
                invoices : [action.payload, ...state.invoices]
            }
        default:
            return state;
    }
}

export const InvoiceContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(InvoiceReducer, {
        invoices: []
    });

    return(
        <InvoiceContext.Provider value={{...state, dispatch}}>
            {children}
        </InvoiceContext.Provider>
    );
}