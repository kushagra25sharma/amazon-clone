import { useState, useEffect } from "react";
import "./Orders.css";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
import Order from "./Order/Order";


const Orders = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
            db.collection("users").doc(user?.uid).collection("orders").orderBy("created", "desc").onSnapshot(snapshot => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }
    }, [user]);

    return (
        <div className="orders">
            <h1>Your Orders:</h1>
            <div className="orders__order">
                {orders.length ? orders?.map((order, index) => (
                    <Order key={index} order={order} />
                )) : "No orders to display."}
            </div>
        </div>
    );
}

export default Orders;