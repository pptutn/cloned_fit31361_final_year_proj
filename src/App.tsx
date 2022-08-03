import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";



function App() {
    const location = useLocation();


    return (
        <div className="app">
            
            <Routes location ={location}>
                <Route path='/' element={<HomePage />}/>

                <Route path='/login' element={<LoginPage />}/>
                    
                <Route path='/signup' element={<SignupPage />}/>
                
            </Routes>
        </div>
    )
}

export default App;