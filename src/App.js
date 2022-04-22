import './App.css';
import { Formik, Field, Form } from 'formik';
import Basics from './components/Basics';
import SignUpForm from './components/SignUpForm';
import SignUpValidation from './components/SignUpValidation';
function App() {
  return (
    <div className="App">
     {/* <Basics/> */}
    {/* <SignUpForm/> */}
    <SignUpValidation/>
    </div>
  );
}

export default App;
