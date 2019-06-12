import React from "react"
import Navbar from "./components/navbar"
import App from "./App"
import Gallery from "./components/gallery";

export default class Main extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Navbar />
                <App />
                <Gallery />
            </div>
        )

    }

}