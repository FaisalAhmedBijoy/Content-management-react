import React,{Component} from "react";

class CardClass extends Component {
    render(){
        return (
            <div>
                <h3>Class Component </h3>
                <h3> this props name: {this.props.name} </h3>
            </div>
        )
    }
}

export default CardClass;