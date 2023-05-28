import React, { useContext, useEffect, useState } from 'react';
import { useStripe, useElements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { CARD_OPTIONS } from './card_options.js';
import { AppContext } from '../util/contextItem.js';

class CheckoutForm extends React.Component {

    handleSubmit = async (event) => {
        event.preventDefault();
        const { stripe, elements } = this.props;

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }


        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: "https://example.com/order/123/complete",
            },
        });
        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            console.log("The payment is a success!")
        }
    }
    render() {
        return (
            <form
                className="w-6/12 mx-auto border-2 rounded_lg box_shadow my-10"
                onSubmit={this.handleSubmit}
            >
                <div
                    className="w-11/12 mx-auto"
                >
                    <div
                        className="w-6/12 mx-auto my-10"
                    >
                        <CardElement
                            options={CARD_OPTIONS}
                        />
                    </div>
                    <div
                        className="mx-auto text-center"
                    >
                        <button
                            type='submit'
                            className="btn-primary my-10 mx-auto"
                        >Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default function InjectedCheckoutForm() {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
                <CheckoutForm stripe={stripe} elements={elements} />
            )}
        </ElementsConsumer>
    )
}

