import React, { Component } from 'react'

class EventHandlerBinding extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleOnClickBindConstructor = this.handleOnClickBindConstructor.bind(this)
    }

    // error function - ES 6
    handleOnClick = (event) => {
        console.log('count value: ', this.state.count)
        this.setState({
            count : this.state.count + 1
            
        })
    }

    handleOnClickBind(){
        console.log('count value: ', this.state.count)
        this.setState({
            count : this.state.count + 1
            
        })

    }
    handleOnClickBindConstructor(){
        // console.log('count value: ', this.state.count)
        this.setState({
            count : this.state.count + 1
            
        })

    }

    render() {
        return (
            <div>

                <h2>Count value: {this.state.count} </h2>
                <button onClick={this.handleOnClick} > Count Normal  </button>

                <button onClick={this.handleOnClickBind.bind(this)} > Bind Button  </button>
                
                <button onClick={this.handleOnClickBindConstructor} > Bind Button in Constructor  </button>
            </div>

        )
    }
}
export default EventHandlerBinding;