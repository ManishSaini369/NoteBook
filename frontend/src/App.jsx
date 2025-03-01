import React, { useState } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useSelector } from "react-redux"
import ThemeToggle from "./components/ThemeToggle"

const App = () => {
  const theme = useSelector((state) => state.user?.theme || "light");
  return (
    <BrowserRouter>
        <div className={`${theme === "dark" ? "dark bg-gray-900 text-slate-900" : "bg-white text-black"} min-h-screen transition-all`}>
          <ThemeToggle />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer position="top-center" />
      </div>
    </BrowserRouter>
  )
}

export default App
