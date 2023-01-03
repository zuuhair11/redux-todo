import { useSelector } from "react-redux" ;
import { selectedAllItems } from "../app/features/todo/itemsSlice" ;
import Item from "./Item" ;

function Items() {
    const items = useSelector( selectedAllItems );
    
    return (
        <div className="items-container">
            {
                items.length !== 0 ? 
                    <ul>
                        { items.map( item => {
                            return <Item key={ item.id } item={ item } />
                        } ) }
                    </ul>
                : <h2>Nothing fetched</h2>
        }
        </div>
    );
}



export default Items;