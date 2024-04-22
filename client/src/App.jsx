import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllFoodPage from "./pages/AllFoodPage.jsx";
import CreateFood from "./pages/CreateFood.jsx";
import UpdatePage from "./pages/UpdateFood.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllFoodPage/>}/>
                <Route path="/create" element={<CreateFood/>}/>
                <Route path="/update/:id" element={<UpdatePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;