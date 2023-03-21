import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const categories: string[] = ['All products', 'Perfume', 'Skinshare']

interface IFilterSlice {
	category: number
}

const initialState: IFilterSlice = {
	category: 0,
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeCategory(state, action: PayloadAction<number>) {
			state.category = action.payload
		},
	},
})

export const { changeCategory } = filterSlice.actions
export default filterSlice.reducer
