import React from 'react'

class Event extends React.Component {
    constructor(props){
        super(props)
        this.state = {

            count: 0,
            isLoading: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){

        // this.setState(prevState =>{

        //        return {

        //             count: prevState.count + 1
        //        }
        // })

        this.setState({
            count:this.state.count+1,
            isLoading: !this.state.isLoading
        })
    }
    render(){

        const heading = 'INSTAGRAM'

        return(

            <div>
                <h3>{heading}</h3>
                {/* {this.state.isLoading && <h2>Number of viewers: {this.state.count}</h2> } */}
                {/* {this.state.isLoading ? <h2>Number of viewers: {this.state.count}</h2> : null } */}
                <h2>Number of viewers: {this.state.count}</h2>
                <button onClick={this.handleClick} className="btn btn-outline-secondary">click</button>
            </div>
        )
    }
}


export default Event;