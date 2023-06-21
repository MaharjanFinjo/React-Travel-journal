import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import Journal from "./components/Journal"
import data from "./data"

export default function App() {
    const JourData = data.map(item => {
        return (
            <Journal 
                key={item.title}
                item = {item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {JourData}
        </div>
    )
}
