import React, {Component} from "react"
import data from "./data"

class FavoriteMovies extends Component {
    constructor(props) {

        super(props);
    

    }
    render() {
        let index = this.props.index
        return (
            <ol className="MovieList"> Favorite Movies:
                <li>{`${data[index].favoriteMovies[index]}`}</li>
                <li>{`${data[0].favoriteMovies[1]}`}</li>
                <li>{`${data[0].favoriteMovies[2]}`}</li>
            </ol>
        )
    }
}
export default FavoriteMovies