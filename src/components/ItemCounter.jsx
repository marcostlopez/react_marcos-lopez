import React, { useState } from "react"

const ItemCounter = ({stock, onAdd}) => {
    const [count, setCount]= useState(1)
    const sumar = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    console.log('item counter')

    const onAddHandler = () =>{
        onAdd(count)
    }

    return (
        <div>
            <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            </div>
        <button className="btn btn-primary" onClick={onAddHandler}>Comprar</button>
        </div>

    )
}
export default ItemCounter