import { createSlice, nanoid } from '@reduxjs/toolkit' ;



const initialState = {
    items: [
        {id: '1', content: 'Goin to school'},
        {id: '2', content: 'Grab my laptop'},
        {id: '3', content: 'Goig to the coffee shope'}
    ],

}

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(itemContent) {
                return {
                    payload: {
                        id: nanoid(),
                        content: itemContent
                    }
                }
            }
        },
        deleteAllItems: (state) => {
            return {
                ...state,
                items: []
            }
        },
        deleteItem: (state, action) => {
            return {
                ...state,
                items: state.items.filter( item => item.id !== action.payload)
            }
        }
    }
});


export const selectedAllItems = (state) => state.items.items;

export const { addItem, deleteAllItems, deleteItem } = itemsSlice.actions;

export default itemsSlice.reducer;