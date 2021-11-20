import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages"
import BuyXtk from "./pages/buyxtk.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/buy" element={<BuyXtk />} exact />
      </Routes>
    </Router>
  )
}

export default App
