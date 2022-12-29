// write your CatList component here
import React, { Component } from "react"


class CatList extends Component {

    renderCats = () => this.props.catPics.map(cat => <img src={cat.url} alt={cat.url}/>)

    // displayLoading = () => {
    //     if (this.props.loading === true) {
    //         <div><h4>LOADING!</h4></div>
    //     }
    // }

    render() {
        return(
            
            <div>
                {/* {this.displayLoading()} */}
                {this.renderCats()}
            </div>

        )
    }

}

export default CatList