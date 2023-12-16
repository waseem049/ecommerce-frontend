export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
});

export const removeItem = id => ({
    type: 'REMOVE_ITEM',
    payload: id
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});