import React from 'react';
import './Player.css'

const Players = (props) => {
    const { name, salary, photo } = props.players;
    const btnStyle = {
        width: '100%'
    }
    return (

        <div className="card player-card shadow">
            <img src={photo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">salary: ${salary}</h5>
                <button style={btnStyle} onClick={() => props.handleAddPlayer(props.players)} className="btn btn-primary"><i class="fas fa-user-plus"></i>ADD</button>
            </div>
        </div>


    );
};

export default Players;