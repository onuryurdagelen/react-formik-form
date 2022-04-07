import { Formik, Field, Form } from 'formik';

const Basics = () =>{
    return(
        <div>
            <h1>Sign Up</h1>
        <Formik
          initialValues={{
            firstName: 'Onur',
            lastName: 'Yurdagelen',
            email: 'onur123@gmail.com',
            gender: 'female',
            hobbies:[],
            country: 'usa'
          }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
        {
          ({handleSubmit,handleChange,values}) =>(
            <form onSubmit={handleSubmit}>
               <label htmlFor="firstName">First Name</label>
               <input 
               id="firstName" 
               name="firstName" 
               placeholder="Jane"
               value={values.firstName}
               onChange={handleChange}
               
               />
       <br />
       <br />
               <label htmlFor="lastName">Last Name</label>
               <input 
               id="lastName" 
               name="lastName"
               value={values.lastName}
               placeholder="Doe"
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
                 values={values.email}
               />
               <br />
               <br />
              <span>Male</span>
               <input 
               name="gender" 
               value="male" 
               onChange={handleChange} 
               checked={values.gender === 'male'} 
               type="radio"
               />
    
               <span>Female</span>
               <input 
               name="gender" 
               value="female" 
               onChange={handleChange}  
               checked={values.gender === 'female'} 
               type="radio"/>
               <br />
               <br />
    
                <div>
                  Football
                  <input  onChange={handleChange}   name='hobbies' type="checkbox" value="Football"/>
                </div>
               <div>
              Cinema
               <input  onChange={handleChange}   name='hobbies' type="checkbox" value="Cinema" />
               </div>
               <div>
                 Photography
               <input  onChange={handleChange}   name='hobbies' type="checkbox" value="Photography" />
               </div>
    
               <br /><br />
    
              <div>
              <select onChange={handleChange} value={values.country} name="country">
                 <option value="turkey">Turkey</option>
                 <option value="england">England</option>
                 <option value="usa">USA</option>
               </select>
              </div>
               <button type="submit">Submit</button>
               <br /><br />
    
               <code>{JSON.stringify(values)}</code>
             </form>
          )
        }
        </Formik>
        </div>
    )
}
export default Basics;