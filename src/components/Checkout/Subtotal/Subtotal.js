import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {  useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer";


function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    // let sum = 0;
    // basket.forEach(item => {
    //     sum += item.price;
    // });

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket?.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />
                        This order contains gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thosandSeparator={true}
            prefix={"$"}
            />
            <button>Procced to Checkout</button>
        </div>
    );
}

export default Subtotal;