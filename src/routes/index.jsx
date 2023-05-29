import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Home from "../Pages/Home";
import Eventos from "../Pages/Eventos";
import Responsaveis from "../Pages/Responsaveis";
import Salas from "../Pages/Salas";
import NotFound from "../Pages/NotFound";

export const Ways = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard/>}>
                        <Route index element={<Home />} />
                        <Route path="/salas" element={<Salas />} />
                        <Route path="/responsaveis" element={<Responsaveis />} />
                        <Route path="/eventos" element={<Eventos />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />      
                </Routes>
            </BrowserRouter>
        </>
    );
}