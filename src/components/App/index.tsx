import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '@/components/HomePage'
import { PrivacyPage } from '@/components/PrivacyPage'
import { SupportPage } from '@/components/SupportPage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/privacy/" element={<PrivacyPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/support/" element={<SupportPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
