import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BudgetPorvider } from './context/BudgetContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BudgetPorvider>
        <App />
    </BudgetPorvider>
  </StrictMode>,
)
