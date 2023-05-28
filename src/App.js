import { useState } from 'react'; 
import { AppContext } from './util/contextItem.js'
import Routes from './components/routes.js'; 
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PK);
const App = props => {

    const [message, setMessage] = useState([])
    const context = {
        apiURL: process.env.REACT_APP_SERVER_URL, 
        message,
        setMessage, 
    }
    return (
        <Elements stripe={stripePromise}>
        <AppContext.Provider value={context}>
            <Routes />
            </AppContext.Provider>
        </Elements>
    )
}

export default App; 