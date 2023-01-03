import { FaTimes } from 'react-icons/fa' ;
import { useDispatch } from 'react-redux' ;
import { deleteItem } from '../app/features/todo/itemsSlice' ;

function Item({ item }) {
    const dispatch = useDispatch();

    const handleDelelteItem = (id) => {
        dispatch( deleteItem(id) );
    }

    const handleModifyItem = (id) => {
        console.log(id)
    }


    return (
        <li>
            <button 
                className='delete-item'
                onClick={ () =>  handleDelelteItem(item.id) }
            >
                <FaTimes color='red' />
            </button>
            { item.content }
            <button
                className='modify-btn'
                onClick={ () => handleModifyItem(item.id) }
            >
                Modify
            </button>
        </li>
    );
}



export default Item;
