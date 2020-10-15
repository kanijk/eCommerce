import React from 'react';

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HcD7GHGMJfrmy8gBdqEerPDTC3VskhhH5ETvnuDUVHw5Pc9Nnrrc5tqklkPzeugTx4Pys1lJMS6EFa3007n9u3m00o3hP1h6d';
    const onToken = (token)=>{
        console.log(token);
        alert('Payment Successful')
    }
    
    return (
        <StripeCheckout
            label='Pay Now'
            name = 'CRWN CLOTHING LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is Rs.${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}        
        ></StripeCheckout>
    )
}

export default StripeCheckoutButton;