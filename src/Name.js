import React, {Component} from "react"
import data from "./data"

class Name extends Component {
    constructor(props) {

        super(props);
    }
    render() {
        console.log(data)
        console.log(this.props)
        let index = this.props.index
        return (
            <div>
           {/* <h2 className="Name">{`${data[index].name.first} ${data[index].name.last}`}</h2>  */}
           </div>
           )
    }
}

export default Name;