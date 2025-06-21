import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../features/auth/admin/Login"

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}