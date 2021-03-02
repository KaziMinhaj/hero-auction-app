import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const total = props.cart.reduce((sum, player) => sum + player.salary, 0);
    const borderTop = {
        borderTop: '2px solid lightgrey'
    }
    const style = {
        padding: '15px'
    }
    return (
        <div className="cart shadow" style={style} >
            <h3>Auction Summary</h3>
            <h5>Players Added: {props.cart.length}</h5>
            <ul>
                {
                    props.cart.map((player) =>
                        <div>
                            <li>{player.name}</li>
                            <p><small>Salary: ${player.salary}</small></p>
                        </div>
                    )
                }
            </ul>
            <h5 style={borderTop}>
                Total Budget: ${total}
            </h5>
        </div>
    );
};

export default Cart;