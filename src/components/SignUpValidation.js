import { useFormik } from 'formik';
import validationSchema from "./validation";
const SignUpValidation = () =>{
  const {handleSubmit,values,handleChange,errors,touched,handleBlur} = useFormik({
    initialValues:{
        email: '',
        password: '',
        confirmPassword: ''
    },
    onSubmit:(values) =>{
        console.log(values);
    },
  validationSchema
});
console.log(errors)
    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
               
               
               <label htmlFor="email">Email</label>
               <input
                 id="email"
                 name="email"
                 placeholder="jane@acme.com"
                 type="email"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 values={values.email}
               />
               {errors.email && touched.email && <span className='error-field'>{errors.email}</span>}
               <br />
               <br />
               <label htmlFor="password">Password</label>
               <input
                 id="password"
                 name="password"
                 placeholder="password"
                 type="password"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 values={values.password}
               />
               {errors.password && touched.password && <span className='error-field'>{errors.password}</span>}
               {/* {errors.password !== errors.confirmPassword && <span className='error-field'>{errors.password}</span>} */}
               <br />
               <br />
               <label htmlFor="confirmPassword">Password Confirm</label>
               <input
                 id="confirmPassword"
                 name="confirmPassword"
                 placeholder="password confirm"
                 type="password"
                 onChange={handleChange}
                 values={values.confirmPassword}
                 onBlur={handleBlur}
               />
               {errors.confirmPassword && touched.confirmPassword && <span className='error-field'>{errors.confirmPassword}</span>}
               <br/>
               <br/>
               <button type="submit">Submit</button>
               <br /><br />
    
               <code>{JSON.stringify(values)}</code>
             </form>
        </div>
    )
}
export default SignUpValidation;