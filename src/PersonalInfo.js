import React, {Component} from "react"
import data from "./data"

class PersonalInfo extends Component{
    constructor(props) {

        super(props);
    }
    render() {
        let index = this.props.index
        return(
            <ul className="List">
                <h2>From:{`${data[index].city} ${data[index].country}`}</h2>
                <h2>Job Title:{`${data[index].title}`}</h2>
                <h2>Employer:{`${data[index].employer}`}</h2>
            </ul>
        )
    }
}


export default PersonalInfo