import "./App.css"
import LoginPage from "./pages/loginPage/loginPage"
import HomePage from "./pages/homePage/homePage"
import CreatePage from "./pages/createPage/createPage"
import EditPage from "./pages/editPage/editPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return <div className="app">
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/createAquo" element={<CreatePage />} />
                <Route path="/editAquo" element={<EditPage />} />
            </Routes>
        </Router>
    </div>

}

export default App