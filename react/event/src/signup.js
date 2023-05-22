import React from 'react';
import "./signup.scss";
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';



const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

const Signup = () => {
  ;
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      debugger
      if (values) {
        const data = {
          email: values.email,
          password: values.password
        }
      }
    } catch (error) {
      console.log('error', error);
      
    }
   
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isValid, isSubmitting, values }) => {
        console.log(errors, values);
        return (
          <Form>
            <div className='container'>
              <div className='logo'>
                <img src="https://d24hrkfl5wrd0k.cloudfront.net/themes/thinkpalm/images/logo.png" alt="Thinkpalm Technologies" title="Thinkpalm Technologies" class="loading" data-was-processed="true"></img>
              </div>
              <div className='body'>
                <div className='form'>
                  <h1 className='sign'>Sign in</h1>
                  <div className='content'>
                    <Field className="input" type="email" name="email" placeholder="Email " />
    
                  </div>

                  <div className='content'>
                    <Field className="input" type="password" name="password" placeholder="Password" />
                    
                  </div>
                  <button type="submit" className='btn' disabled={!isValid || isSubmitting} >Sign In</button>
                  {isValid && !isSubmitting }
             
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  )
}
export default Signup