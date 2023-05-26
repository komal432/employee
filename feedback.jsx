import React, { Component } from 'react'
import './style.css';

export class feedback extends Component {
    constructor(){
        super();
        this.state={
            nameIp:'',
            departmentIp:'',
            ratingIp:'',
            //1. take inputs, 2. create object , 3.push objects in array
            myObj:{},
            users:[]

        }
    }
  

  render() {

    const handleChange=(e)=>{
        console.log('typing...');
        console.log(e.target.value);

        this.setState({
            [e.target.id]:e.target.value,
        })

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //step 2. create temperory object
        let tempObj = this.state.myObj;
        tempObj={
            nameIp:this.state.nameIp,
            departmentIp:this.state.departmentIp,
        }

        //step.3 
        let tempArr = this.state.users;
        tempArr.push(tempObj);

        this.setState({
            users:tempArr
        })
        console.log(this.state.users);
    }

    return (
     <>
     <form className='container'>
     <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
     <label className="lb">Name:</label>
            <input id="nameIp" type='text'  placeholder='Enter your name' onChange={handleChange}/>
            <br></br><br></br>
            <label className="lb">Department:</label>
            <input id="departmentIp" type='text'  placeholder='Enter your dep' onChange={handleChange}/>
            <br></br><br></br>
            <label className="lb">Rating:</label>
            <input id="ratingIp" type='text'  placeholder='Enter rating' onChange={handleChange}/>
            <br></br><br></br>
            <button className='button' onClick = {handleSubmit}>Submit</button>

            </form>

            <div>
                {/* <p>Name={this.state.nameIp}</p>
                <p>Department={this.state.DepartmentIp}</p>
                <p>Rating={this.state.RatingIp}</p> */}

                {this.state.users.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h3>Name= {item.nameIp}</h3>
                            <h3>Department= {item.departmentIp}</h3>
                            <hr/>
                        </div>
                    )
                })}
            </div>
     
     
     
     </>
    )
  }
}

export default feedback