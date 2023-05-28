import { useCallback } from 'react'; 
import {
    RenderSuccess,
    Cancel, 
} from '../components/orderResult.js'
import { useNavigate, useLocation } from 'react-router-dom'; 
import { NavigationHooks } from '../hooks/navigation.js';

const RenderPage = props => {
    const navigate = useNavigate();
    const location = useLocation(); 

    const {
        isSuccess, 
    } = location.state; 

    const {
        GoHome,
    } = NavigationHooks(navigate); 

    const HomeButton = () => <button
        className="btn-primary"
        onClick={useCallback(()=>GoHome, [navigate])}
    >Go Home</button>

    if (isSuccess) {
        return <RenderSuccess button={HomeButton} />
    }
    else {
        return <Cancel button={HomeButton} />
    }
}

export default RenderPage; 