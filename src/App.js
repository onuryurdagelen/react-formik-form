import './App.css';
import { Formik, Field, Form } from 'formik';
import Basics from './components/Basics';
import SignUpForm from './components/SignUpForm';
function App() {
  return (
    <div className="App">
     {/* <Basics/> */}
    <SignUpForm/>
    </div>
  );
}

export default App;
