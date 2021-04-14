import { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import axios from "../../axios";

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const history = useHistory();

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        // if customer removes items then generate a new secret
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // stripe expects the total in subunits so instead of dollars it will measure in cents 
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            // whenever the basket changes it will make the request and updates the clientSecret
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket]);

    const handleSubmit = async (e) => {
        // all fancy stripe stuff here
        e.preventDefault();
        setProcessing(true); // once user clicks enter the button will be disabled to prevent them from hitting it more than once

        // clientSecret is essential it will let stripe now how much we are going to charge
        // the payment method is by card and we get card by the CardElement we used in the form below that render our card 
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: { card: elements.getElement(CardElement)}
        })
        .then(({ paymentIntent }) => {
            // we get response as it is a promise and we distructure it
            // paymentIntent = payment confirmation

            setSucceeded(true);// everything is ok since we are in then(), transaction was successfull
            setError(null);// no error
            setProcessing(false);// transaction is completed don't show processing

            // when we push user to another page they can get back to previous page by clicking back button
            // but we don't want that when user makes payment
            history.replace('/orders');
        });
    }

    const handleChange = (e) => {
        // listen for changes in the CardElement and display
        // any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout ({<Link to="/checkout">{basket?.length} items </Link>}) </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>12/3 Wayne Street</p>
                        <p>Gotham City</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item, index) => (
                            <CheckoutProduct key={index} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thosandSeparator={true}
                                    prefix={"$"}
                                />
                            </div>
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </form>
                    </div>
                    {error && <div>{error}</div>}
                </div>
            </div>
        </div>
    );
}

export default Payment;
