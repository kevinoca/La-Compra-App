import React from "react"
import Images from "./dataStore.json"

export default class Gallery extends React.Component {

    constructor(props) {
        super(props)
        this.state = { images: Images }
    }

    render() {

        const { images } = this.state

        return (

            <div>
                <ul style={{ listStyleType: "none" }}>
                    {/* {images.map((x, i) => <li style={{ width: "30vw", float: "left" }}><img key={i} src={x.image} style={{ width: "100%" }} /></li>)} */}
                </ul>
            </div >

        )

    }

}