import React from 'react'
import FormikForm from './Forms/FormikForm';
import FormikWithYup from './Forms/FormikWithYup';

const App = () => {
    return (
        <div>
            {/* <h1>Formik Form</h1>
            <FormikForm/>  */}
            <h1>Formik Form with Yup</h1>
            <FormikWithYup/>      
        </div>
    )
}
 export default App