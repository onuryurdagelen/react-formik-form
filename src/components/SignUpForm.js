import React from 'react'
import { useFormik,Formik } from 'formik';
import validationSchema from './validation';

const SignUpForm = () => {
    const {handleSubmit,values,handleChange} = useFormik({
        initialValues:{
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit:(values) =>{
            console.log(values);
        },
      validationSchema
    });
  return (
    <div>
         <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
       <br />
       <br />
               <label htmlFor="username">Username</label>
               <input 
               id="username" 
               name="username"
               value={values.username}
               placeholder="doejoen"
               onChange={handleChange}
               />
               
       <br />
       <br />
               <label htmlFor="email">Email</label>
               <input
                 id="email"
                 name="email"
                 placeholder="jane@acme.com"
                 type="email"
                 onChange={handleChange}
                 value={values.email}
               />
               <br />
               <br />
               <label htmlFor="password">Password</label>
               <input 
               id='password'
               name="password" 
               value={values.password} 
               onChange={handleChange}
               type="password"
               />
                <label htmlFor="confirmPassword">Confirm Password</label>
               <input 
               id='confirmPassword'
               name="confirmPassword" 
               value={values.confirmPassword}
               onChange={handleChange}
               type="password"/>
               <br /><br />
               <button type="submit">Submit</button>
               <br /><br />
               <code>{JSON.stringify(values)}</code>
    
              
               

    
              
             </form>
             </div>
          )
  
}

export default SignUpForm