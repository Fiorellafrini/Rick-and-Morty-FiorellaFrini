
import Validate from './Validate'
import { useState } from 'react';

export default function Form({login}) {

    const [userData, setUserData] = useState({
    username: '',
    password: ''
});

    const [errors, setErrors] = useState({
        username:'',
        password:''
    })

 
    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(Validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    
    function handleSubmit (event){
        event.preventDefault()
        login(userData)

    }


 return(
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username"> Username: </label>
            
            <input
                type= 'text'
                name= 'username'
                placeholder="Enter username"
                value={userData.username}
                onChange= {handleInputChange} /> 
            {errors.username && <p style={{color: 'red'}} >{errors.username}</p>}

            <label htmlFor="password">Password: </label>
            <input
                type= 'text'
                name= 'password'
                placeholder="Enter password"
                value={userData.password}
                onChange= {handleInputChange} /> 
            {errors.password && <p style={{color: 'red'}} >{errors.password}</p>}

            
            <button>Log In ✔</button>
        
        </form>
    </div>
    )
 }

