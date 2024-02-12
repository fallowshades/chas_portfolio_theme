'use client'
import React, { createContext, useContext, useReducer } from 'react'
import { Navbar } from '@/components'
const ThemeContext = createContext()

const initialState = {
  theme: 'light',
  userPreferences: {
    fontSize: 'medium',
    reduceAnimations: false,
  },
}

function themeReducer(state, action) {
  // your code here
}

const setTheme = (theme) => {
  console.log('change')
}

const ThemeProvider = ({ children }) => {
  // your code here

  return (
    <ThemeContext.Provider value={{ setTheme }}>
      <main className="">
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </main>
    </ThemeContext.Provider>
  )
}

// Create and use your own hook instead of using useContext in the components
export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider
