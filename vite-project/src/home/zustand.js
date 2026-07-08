import { create } from "zustand";
import { persist } from 'zustand/middleware'



const useStore=create(persist((set)=>({
    user:null,
    setUser:(user)=>set({user}),
    updateImg:(allImg)=>set((state)=>({
        user:{
            ...state.user,
            allImg,
            
        }
    })),
    updateStorage:(userStorage)=>set((state)=>({
        user:{
            ...state.user,
            userStorage
        }
    })),
    logout :()=>set({user:null})
   
}))
 ,{name:'user-info-storage'})


export default useStore;