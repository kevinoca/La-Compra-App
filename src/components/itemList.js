import React from "react"

const ItemList = props => {

    return (

        <li className="item-list" onClick={() => props.onSelect(props)}>
            <div className="item-list-inner">
                <div className="item-list-image">
                    <img src={props.image} alt="alquichofa" />
                </div>
                <div className="item-list-name">{props.name}</div>
                <div className="item-list-action">
                    <i className="far fa-check-circle fa-2x"></i>
                </div>
            </div>
        </li>

    )

}

export default ItemList