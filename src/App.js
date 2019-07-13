/* eslint-disable no-useless-constructor */
import React from 'react';
import './App.css';
import Card from './components/CardComponent'
import Event from './components/EventComponent'
import Form from './components/FormComponent'
// import Data from './data/courses'

class App extends React.Component {
  constructor(props){

        super(props)
        this.state = {

            character:[]
            
        }
  }
  componentDidMount(){

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
           return response.json()
        })
        .then(data=>{

            this.setState({

                character: data
            })
        })
}
  render(){

    const myData = this.state.character.map((datas)=>{

      return(

            <Card title={datas.title} text={datas.body} button="Register" key={datas.id} />
        )
    })
      return(

        
          <div className="m-3">
              <div className="row">
                    {/* <div className="col-md-6">
                          <Card 
                            title="Mobile"
                            text="I love programming language"
                            button="Register"
                          />
                    </div> */}
                        <Event  />


                     {/* {myData} */}
                     <div className="col-md-6">

                          <Form/>

                     </div>
              </div>
          </div>
        )
      
  }
}

export default App;
