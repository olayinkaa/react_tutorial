import React from 'react'

class Event extends React.Component {
    constructor(){
        super()
        this.state = {

            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){

        // this.setState(prevState =>{

        //        return {

        //             count: prevState.count + 1
        //        }
        // })

        this.setState({count:this.state.count+1})
    }
    render(){

        return(

            <div>
                <h2>Number of viewers: {this.state.count}</h2>
                <button onClick={this.handleClick} className="btn btn-outline-secondary">click</button>
            </div>
        )
    }
}


export default Event;