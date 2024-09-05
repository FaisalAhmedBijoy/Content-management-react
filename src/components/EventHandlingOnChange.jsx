import React, { Component } from 'react'

class EventHandlingOnChange extends Component {

    constructor(props) {
        super(props)
        this.state = {
            changeValue: ''
        }
    }

    handleOnChange = (event) => {
        console.log('event start: ', event.target.value)
        this.setState({
            changeValue : event.target.value
            
        },()=>{
            console.log('event: ', event.target.value)

        })
        console.log('event end: ', event.target.value)
    }

    render() {
        return (
            <div>

                <h2>Hello </h2>
                <input type='text' onChange={this.handleOnChange} />
                <p>Change Value: {this.state.changeValue}</p>
                {/* <p> {this.state.changeValue} </p> */}
            </div>

        )
    }
}
export default EventHandlingOnChange;