'use client'
import React, { createContext, useContext, useReducer } from 'react'

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

const ThemeProvider = ({ children }) => {
  // your code here

  return (
    <ThemeContext.Provider value={{}}>
      <div>{children}</div>
    </ThemeContext.Provider>
  )
}

// Create and use your own hook instead of using useContext in the components
export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider
