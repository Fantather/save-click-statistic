import './App.css'
import { StatsDisplay } from './components/StatsDisplay'
import { ClickProvider } from './contexts/ClickContext'

function App() {
  return (
    <ClickProvider>
      <StatsDisplay />
    </ClickProvider>
  )
}

export default App
