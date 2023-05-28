import { useContext, useEffect, useState } from 'react'; 
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import {CARD_OPTIONS} from './card_options.js'; 
import { AppContext } from '../util/contextItem.js'; 
import { PaymentHooks } from '../hooks/stripePayment.js'; 
import { useNavigate } from 'react-router-dom';
import { NavigationHooks } from '../hooks/navigation.js';

const RenderForm = props =>{
    const stripe = useStripe(); 
    const elements = useElements(); 
    const {
        apiURL, 
        setMessage, 
    } = useContext(AppContext); 
    const [isMounted, setMounted] = useState(false)
    const [disableButton, setDisabled] = useState(false); 
    const navigate = useNavigate();
    const {
        GoOrderResultPage,
    } = NavigationHooks(navigate); 
    const product = {
        name: "Albert's education course", 
        price: 343, 
        quantity: 1, 
    } 
    const { makePayment } = PaymentHooks(apiURL, setMessage, GoOrderResultPage)
    
return(
    <form 
        className="w-6/12 py-5 mx-auto border-2 rounded-lg box_shadow bg-white"
        onSubmit={(evt) => { makePayment(evt, product, setDisabled) }}
    >   
        <div 
            className = "w-11/12 mx-auto"
        >
            <div
                className = "w-6/12 mx-auto my-10" 
            >
                <CardElement 
                 options={CARD_OPTIONS}
                 onReady = {()=>setMounted(true)}
                 />
            </div>
            <div
                className = "mx-auto text-center"
            >
                <button
                    type='submit'
                    className = "btn-primary my-10 mx-auto"
                    disabled={disableButton}
                >Submit</button>
                <button
                    type="button"
                    onClick={() => setMessage([{ msg: "You're a winner!" }])}
                    className="btn-secondary"
                >Message</button>
            </div>
        </div>
    </form>
)
}

export default RenderForm; 

           