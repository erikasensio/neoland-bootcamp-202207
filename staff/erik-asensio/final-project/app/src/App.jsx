import "./App.css"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import HomePage from "./pages/HomePage/HomePage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import CreatePage from "./pages/CreatePage/CreatePage"

import EditProfilePage from "./pages/EditProfilePage.jsx/EditProfilePage"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
    
    return <div className="app">
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<HomePage />} />
                <Route path="/create-aquo" element={<CreatePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/edit-profile" element={<EditProfilePage />} />
            </Routes>
        </Router>
    </div>

}

export default App