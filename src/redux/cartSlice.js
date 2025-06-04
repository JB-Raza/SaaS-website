import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload
            const existing = state.cart.find(item =>
                item._id == newItem._id && item.variant.color == newItem.variant.color
            )
            if (existing) {
                existing.quantity += 1
            }
            else {
                state.cart.push(newItem)
                console.log('item added')
            }
        },
        removeItemFromCart: (state, action) => {
            const productToDel = action.payload
            state.cart = state.cart.filter((item) => !(item.variant.color === productToDel.variant.color && item._id === productToDel._id))
        },
        updateItemQuanity: (state, action) => {
            console.log(action.payload)
            if (action.payload.actionType == "add") {
                state.cart = state.cart.map((item) => {
                    if (item._id == action.payload._id && item.variant.color == action.payload.variant.color) item.quantity += 1
                    return item
                })
            }
            else if (action.payload.actionType == "minus") {
                state.cart = state.cart.map((item) => {
                    if (item._id == action.payload._id && item.variant.color == action.payload.variant.color) item.quantity -= 1
                    return item
                })
            }
        },
        clearCart: (state) => {
            state.cart = []
        }


    }
})



export const { addItemToCart, removeItemFromCart, updateItemQuanity, clearCart } = cartSlice.actions
export default cartSlice.reducer
