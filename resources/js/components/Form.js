import React, { Component } from 'react';
import { Button, FormGroup, Label} from "react-bootstrap";
import ReactDOM from 'react-dom';
import "../../../public/css/form.css";



export default class Form extends Component {

    state = {
        firstname: '',
        lastname: '',
        emailaddress: '',
        mobilenumber: '',
        gender: '',
        dateofbirth: '',
        comments: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const firstname = e.target.elements.firstname.value;
        const lastname = e.target.elements.lastname.value;
        const emailaddress = e.target.elements.emailaddress.value;
        const mobilenumber = e.target.elements.mobilenumber.value;
        const gender = e.target.elements.gender.value;
        const dateofbirth = e.target.elements.dateofbirth.value;
        const comments = e.target.elements.comments.value;
        this.setState(() => 
        ({
            firstname: firstname,
            lastname: lastname,
            emailaddress: emailaddress,
            mobilenumber: mobilenumber,
            gender: gender,
            dateofbirth: dateofbirth,
            comments: comments
        
        }));  
        fetch('/api/form', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                emailaddress: emailaddress,
                mobilenumber: mobilenumber,
                gender: gender,
                dateofbirth: dateofbirth,
                comments: comments
            })
        }).then(function(response) {
            return response.json()
        })

    };

    
   

   

    render() {

    
        return (
          <div className="Form"> 
            <form  onSubmit={this.handleSubmit}>
            <FormGroup>

            <label>First Name:
            <input type="text" name="firstname"/>
            </label>

            <label>Last Name:
            <input type="text" name="lastname"/>
            </label>

            <label>Email address:
            <input type="email" name="emailaddress"/>
            </label>

            <label>Mobile Number:
            <input type="number" name="mobilenumber"/>
            </label>

            <label>Gender:
            <input type="text" name="gender"/>
            </label>

            <label>Date of Birth:
            <input type="text" name="dateofbirth"/>
            </label>

            <label>Comments:
            <input type="text" name="comments"/>
            </label>

            </FormGroup> 
            <Button  type="submit">Submit</Button>
            </form>

            </div>
            
            
        );
    }
}

if (document.getElementById('form')) {
    ReactDOM.render(<Form /> ,document.getElementById('form'));
}
