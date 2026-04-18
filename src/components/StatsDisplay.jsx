import { useContext } from "react"
import { ClickContext } from "../contexts/ClickContext"


export const StatsDisplay = () => {
  // Забираем данные напрямую из контекста
  const { clicks } = useContext(ClickContext)

  return (
    <div style={{ padding: "20px" }}>
      <h2>Статистика кликов: {clicks.length}</h2>
      
      <ul>
        {clicks.map((click) => (
          <li key={click.id}>
            Клик по координатам: X: <b>{click.x}</b>, Y: <b>{click.y}</b> 
            (Время: {new Date(click.timestamp).toLocaleTimeString()})
          </li>
        ))}
      </ul>
    </div>
  )
}