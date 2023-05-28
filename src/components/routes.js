import { useContext } from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from '../util/contextItem.js'; 
import Home from '../screens/home.js';
import OrderResultPage from '../screens/orderResults.js'; 
import MessageComponent from './messageComponent.js'
const RenderRoutes = props => {
    const {
        message,
        setMessage, 
    } = useContext(AppContext)
    
    return (
        <div
            className = "bg-[#dbdbdb] w-full h-full"
        >
            <MessageComponent
                message={message}
                dispatch={setMessage}
            />
            <BrowserRouter>
                <div
                    id="ContentWrapper"
                    className="mt-[50px] pb-[460px]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/order_result" element={<OrderResultPage f />} />
                    </Routes>
                </div>
            </BrowserRouter>

        </div>
)
}

export default RenderRoutes; 