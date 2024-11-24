import ItemCounter from "./ItemCounter"

const ItemListContainer = ({greeting}) =>{
    console.log('ItemListContainer')
    const onAdd =(cantidad)=>{
        alert(`Sumaste ${cantidad} productos al carrito`)
    }
    return(
        <div>
            <h1>{greeting}</h1>
            <img src="/remera_1.jpg" alt="remera de futbol"/>
            <ItemCounter stock={20} onAdd ={onAdd}/>
        </div>
    )
}

export default ItemListContainer