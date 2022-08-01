import React, { Component } from 'react'
import './ReactForm.css'

class ReactForm extends Component {
  render() {
    return (
        <div className='react-form'>

        <form action='#'>
        
                <h3 style={{textAlign:"center"}}>Registration Form</h3>
               <label>Enter Your Name:</label>
               <input type='text' placeholder='Enter Your Name' required/><br></br>

               <label>Enter Your Email:</label>
               <input type='email' placeholder='Enter Your Email' required/><br></br>
               <label>Enter Your Password:</label>
               <input type='password' placeholder='Enter Your Password' required/><br></br>
               <label>Enter Your Address:</label>
               <textarea required></textarea><br></br>
               <label>Enter Your Mobile No:</label>
               <input type='tel' placeholder='Enter Your Mobie No' required/><br></br>

               <label>Select Gender:</label>
             Male:<input type='radio' name='gender' placeholder='select Gender' required/>
             Female:  <input type='radio' name='gender' placeholder='select Gender' required/>
               <br></br>

               <label>Choose Hobbies:</label>
             Cricket:  <input type='checkbox' name='hobbies' placeholder='select Hobbies' checked/>
              Bandminton: <input type='checkbox' name='hobbies' placeholder='select Hobbies' />
              Dancing: <input type='checkbox' name='hobbies' placeholder='select Hobbies' />

               <br></br>



               <label>Choose Your Profile Pic:</label>
               <input type='file' placeholder='choose your profile pic' required/><br></br>

               <label>Select D.O.B:</label>
               <input type='date' placeholder='choose your file' max='12-10-2021' min='12-10-1972' required/><br></br>

               <button type='submit'>Register Me</button>

              <button type='reset'>Reset</button>
         
        </form>
       
     </div>
    )
  }
}

export default ReactForm