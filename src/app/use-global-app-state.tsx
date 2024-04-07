
import { create } from 'zustand'


export type GlobalStateStoreType = {
	loadingProgress: number
}

export const useGlobalAppState = create<GlobalStateStoreType>((set) => ({
	loadingProgress: 0
}))
