import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class PaypalButton extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log('The payment was success!', payment);
        } 

        const onCancel = (data) => {
            console.log('the payment was cancell', data);
        }

        const onError = (err) => {
            console.log('Error!: ', err);
        }

        let env = 'sandbox' // Ambiente de prueba
        let currency = 'USD'
        let total = 1

        const client = {
            sandbox: 'AVcj_v9S3uLOTgeaRBclaJ32nXmPgx3Fic3by5EvU9pey8EMzJO4FZPRkKw0jDvawlgZ94UBjgrP1dJ2',
            production: ''
        }

    return <PaypalExpressBtn env={env} currency={currency} total={total} onerror={onError} onSuccess={onSuccess} onCancel={onCancel} />
    }


}