import { Navigate, Route, Routes } from "react-router-dom"
import { MainPage } from "../components/MainPage"
import { Contributors } from "../components/Contributors"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
          
            <Route path='repo/:id' element={<Contributors />} />

            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
    )
}