import React from 'react';
import Players from '../Player/Players'
import './Body.css'
import Cart from '../Cart/Cart'

const Body = (props) => {

    return (
        <div className="body-container">
            <div className="players">
                {
                    props.players.map((player) => <Players
                        players={player}
                        handleAddPlayer={props.handleAddPlayer}></Players>)
                }
            </div>
            <div>
                <Cart cart={props.cart} />
            </div>
        </div>

    );
};

export default Body;