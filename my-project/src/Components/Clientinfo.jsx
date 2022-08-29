

import React, { Component } from "react";
import axios from 'axios';

class Clientinfo extends Component {
  constructor(props){
    super(props);
    this.state={
      
        name: "",
        nationality: "",
        passport_no: "",
        emirates_id_no: "",
        mobil_no: "",
        email: ""
    }
    this.state={
      date: new Date()
    }
  }
  handleChange=(e)=> {
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})

}

handleSubmit ()  {
  // e.preventDefault();

  if
  ((
  this.state.name !== "" && 
  this.state.nationality !== "" &&
  this.state.passport_no !== "" && 
  this.state.emirates_id_no !== "" &&
  this.state.mobil_no !== "" &&
  this.state.email !== "" 
  ))
  {
    axios.post("http://localhost:5000/clients", this.state)
            .then(res=>{
                console.log(res);
                this.setState({name:'',nationality:'',passport_no:'',emirates_id_no:'',mobil_no:'',email:'' })
            });
            window.location = "/";
  }
}

  
  render() {
    return (
      <>
    <form onSubmit={()=>this.handleSubmit()}>
      
      <div className=" col-auto">
        <img src="shaik.png" alt="clients"></img>
      </div>

      <div className="form-group row">
        <label for="fname" className="control-label col-sm-2">
          First Name
        </label>

        {/* <select className="form-select col-sm-1 row" aria-label="Default select example">
          <option selected>Title</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          onchange={handleChange}
        </select> */}

        {/* <select className="col-sm-1 row">
          <option value="">Title</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
        </select> */}

        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="First name"
            value={this.state.name}
            onChange={(e)=>this.handleChange(e)}
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="dob" className="control-label col-sm-2">
          Date of Birth
        </label>
        <div className="col-sm-3">
          <input
            type="date"
            onClick={this.state.date.toLocaleDateString()}
            className="form-control"
            id="dob"
            placeholder="Date of Birth"
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="nationality" className="control-label col-sm-2">
          Nationality
        </label>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            name="nationality"
            onChange={(e)=>this.handleChange(e)}
            value={this.state.nationality}
            placeholder="Nationality"
          />
        </div>
      </div>

      <div className="row">
        <label for="P No" className="control-label col-sm-2">
          Passport No
        </label>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            name="passport_no"
            onChange={(e)=>this.handleChange(e)}
            value={this.state.passport_no}
            placeholder="Passport No"
          />
        </div>

        <label for="expire date" className="control-label col-sm-2">
          Expire Date
        </label>
        <div className="col-sm-3">
          <input
            type="date"
            onClick={this.state.date.toLocaleDateString()}
            className="form-control"
            id="expire date"
            placeholder="Expire Date"
          />
        </div>
      </div>

      <div className="row">
        <label for="E id no" className="control-label col-sm-2">
          Emirates ID No
        </label>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            name="emirates_id_no"
            onChange={(e)=>this.handleChange(e)}
            value={this.state.emirates_id_no}
            placeholder="Emirates ID"
          />
        </div>
        <label for="expire date" className="control-label col-sm-2">
          Expire Date
        </label>
        <div className="col-sm-3">
          <input
            type="date"
            onClick={this.state.date.toLocaleDateString()}
            className="form-control"
            id="expire date"
            placeholder="Expire Date"
          />
        </div>
      </div>

      <div className="row">
        <label for="mobile number" className="control-label col-sm-2">
          Mobile Number
        </label>
        <div className="col-sm-3">
          <input
            type="number"
            className="form-control"
            name="mobil_no"
            onChange={(e)=>this.handleChange(e)}
            value={this.state.mobil_no}
            placeholder="Mobile Number"
          />
        </div>

        <label for="landline no" className="control-label col-sm-2">
          Land Line No
        </label>
        <div className="col-sm-3">
          <input
            type="number"
            className="form-control"
            id="landline no"
            placeholder="Land Line No"
          />
        </div>
      </div>

      <div className="row">
        <label for="emirate" className="control-label col-sm-2">
          Emirate
        </label>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            id="emirate"
            placeholder="Emirate"
          />
        </div>
        <label for="p.o.box" className="control-label col-sm-2">
          P.O.BOX
        </label>
        <div className="col-sm-3">
          <input
            type="number"
            className="form-control"
            id="p.o.box"
            placeholder="P.O.BOX"
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="email" className="control-label col-sm-2">
          Email Address
        </label>
        <div className="col-sm-3">
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={(e)=>this.handleChange(e)}
            value={this.state.email}
            placeholder="Email Address"
          />
        </div>
      </div>

      {/* <div className="form-floating">
      <label for="notes" textarea className="control-label col-sm-2">Notes</label>
      <div className="col-sm-3">
       <input type="email" className="form-control" id="email" placeholder="Notes"/>
      </div>
  </div> */}

      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Comments</label>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </>
     
    )
  } 
}

export default Clientinfo;


