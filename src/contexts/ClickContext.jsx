import { createContext } from "react"
import { useClickTracker } from "../hooks/useClickTracker";

export const ClickContext = createContext(); 

export const ClickProvider = ({children}) => {
    const {clicks} = useClickTracker();

    return (
        <ClickContext.Provider value={{clicks}}>
            {children}
        </ClickContext.Provider>
    )
}