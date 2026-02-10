import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Yes from './pages/Yes'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/oui" element={<Yes />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
