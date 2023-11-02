import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import productSlice from './slices/productSlice'

export default configureStore({
  reducer: {
    product: productSlice,
  }
})