import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Homework01 from './homeworks/homework01/Homework01.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homework01/>
  </StrictMode>,
)
