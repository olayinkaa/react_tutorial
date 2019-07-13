/* eslint-disable no-useless-constructor */
import React from 'react';

class Form extends React.Component {
  constructor(props){

        super(props)
        this.state = {

              firstName:'',
              lastName:'',
              email:'',
              aboutMe:'',
              isChecked:false,
              gender:'',
              job:'',
              christianity:false,
              islam:false,
              others:false
    
        }

        this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e){
          /*const {name, value,type, checked}  = e.target


          type==='checkbox' ? this.setState( [name]:checked) : 
          this.setState({ name : value })


          */

          e.target.type==='checkbox' ? this.setState({ 
              [e.target.name] : e.target.checked
          }) : 
          this.setState({ [e.target.name] : e.target.value })
  }
 
  render(){

   
      return(

        
          <div className="m-3">
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                  type="text" 
                  value={this.state.firstName}
                  className="form-control" 
                  id="firstName" 
                  name="firstName" 
                  onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                  type="text" 
                  value={this.state.lastName}
                  className="form-control" 
                  id="lastName" 
                  name="lastName" 
                  onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input 
                  type="email" 
                  value={this.state.email}
                  className="form-control" 
                  id="email" 
                  name="email" 
                  onChange={this.handleChange} />
                </div>
                  <div className="form-group">
                  <label htmlFor="aboutMe">About Me</label>
                  <textarea 
                  className="form-control" 
                  value={this.state.aboutMe}
                  name="aboutMe"
                  id="aboutMe"  
                  rows={3} 
                  defaultValue={""} />
                </div>     
                <fieldset className="form-group">
                  <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Religion</legend>
                    <div className="col-sm-10">
                      <div className="form-check form-check-inline">
                        <input 
                        className="form-check-input" 
                        type="checkbox" 
                        name="christianity" 
                        onChange={this.handleChange}
                        checked={this.state.christianity}
                        defaultValue="christianity" />
                        <label className="form-check-label" htmlFor="christianity">christianity</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input 
                        className="form-check-input" 
                        type="checkbox" 
                        name="islam" 
                        onChange={this.handleChange}
                        checked={this.state.islam}
                        defaultValue="islam" />
                        <label className="form-check-label" htmlFor="islam">Islam</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input 
                        className="form-check-input" 
                        type="checkbox"
                        name="others" 
                        onChange={this.handleChange}
                        checked={this.state.others}
                        defaultValue="others" />
                        <label className="form-check-label" htmlFor="others">Others</label>
                      </div>
                    </div>
                  </div>
              </fieldset>
                <fieldset className="form-group">
                    <div className="row">
                      <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input 
                          className="form-check-input" 
                          type="radio" 
                          name="gender" 
                          checked={this.state.gender=="male"}
                          onChange={this.handleChange}
                          defaultValue="male"  />
                          <label className="form-check-label" htmlFor="gender">
                           Male
                          </label>
                        </div>
                        <div className="form-check">
                          <input 
                          className="form-check-input" 
                          type="radio" 
                          name="gender" 
                          checked={this.state.gender=="female"}
                          onChange={this.handleChange}
                          defaultValue="female" />
                          <label className="form-check-label" htmlFor="gender">
                           Female
                          </label>
                        </div>
                      </div>
                    </div>
                </fieldset>
                <div className="form-group">
                  <label htmlFor="job">Example multiple select</label>
                  <select  
                  className="form-control" 
                  name="job"
                  value={this.state.job}
                  onChange={this.handleChange}                  
                  >
                    <option>Please select a Job role</option>
                    <option value="react developer">React Developer</option>
                    <option value="java developer">Java Developer</option>
                    <option value="angular developer">Angular Developer</option>
                    <option value="nodejs developer">Nodejs Developer</option>
                  </select>
              </div>


                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              {/*  */}

              <div className="container"> 
                    <h2>{this.state.firstName}</h2>
              </div>

          </div>
        )
      
  }
}

export default Form
