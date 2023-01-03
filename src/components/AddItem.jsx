import { useState } from "react" ;
import { useDispatch } from "react-redux" ;
import { addItem, deleteAllItems } from '../app/features/todo/itemsSlice' ;


function AddItem() {
    const [itemContent, setItemContent] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setItemContent(e.target.value);
    }

    const handleAddItem = () => {
        if(itemContent.length !== 0) {
            dispatch( addItem(itemContent) );
            setItemContent('');
        }
    }

    const handleDeleteAllItems = () => {
        dispatch( deleteAllItems() );
    }

    return (
        <div className="add-item">
            <p>What's your plans for today</p>
            <input 
                className="input-add-item"
                type='text'
                placeholder="What's in your mind"
                value={ itemContent }
                onChange={ e => handleChange(e) }
            />

            <button 
                className="add-btn"
                onClick={ handleAddItem }
            >
                Add
            </button>
            <button 
                className="delete-all-btn"
                onClick={ handleDeleteAllItems }
            >
                Delete all
            </button>
        </div>
    );
}



export default AddItem;
