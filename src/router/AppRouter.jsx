import { Navigate, Route, Routes } from "react-router-dom"
import { MainPage, Contributors } from "../components"


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path='repo/:id' element={<Contributors />} />

            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
    )
}