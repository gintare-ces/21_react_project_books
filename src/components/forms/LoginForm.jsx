import { useFormik } from 'formik'
import React from 'react'



function LoginForm({ onLogin }) {
    const formik = useFormik({
        initialValues: {
            email: 'jon@jon.lt',
            password: '556122',
        },
        onSubmit: (values) => {
            console.log('values ===', values);
            onLogin(values);
        }
    })
  return (
    <div>
     <form onSubmit={formik.handleSubmit}>
        <div >
            <label className='form-label' htmlFor="email">Email</label>
            <input  
                className='form-control'
                type="text" 
                id='email'
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
        </div>
        <div >
            <label className='form-label' htmlFor="password">Password</label>
            <input 
                className='form-control' 
                type="password" 
                id='password'
                name='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
        </div>
        <button className='btn btn-outline-dark mt-4' type='submit'>Login</button>
     </form>
    </div>
  )
}

export default LoginForm