import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

export const useClickTracker = () => {
    const [clicks, setClicks] = useLocalStorage("clickStats", [])

    // Сохранение информации о клике
    useEffect(() => {
        const handleClick = (event) => {
            const newClick = {
                id: crypto.randomUUID(),
                x: event.clientX,
                y: event.clientY,
                timestamp: Date.now()
            }

            setClicks(prevClicks => [...prevClicks, newClick])
        }

        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    // Работа с таймером
    useEffect(() => {
        if(clicks.length == 0){
            return
        }

        const clearClicks = () => setClicks([]);
        const timeoutId = setTimeout(() => {
            clearClicks
        }, 30000);

        return () => {
            clearTimeout(timeoutId)
        }
    }, [clicks])

    return { clicks }
}