import React from 'react';
import { useFormik } from 'formik';
import Country from './Country';
import Education from './Education';
import validator from 'validator';
import './App.css';
import { useState } from 'react';
// import PhoneInput from 'react-phone-number-input'

  
// const App = () => {
      const defaultOption = "";
  
//   }

    // const [emailError, setEmailError] = useState('')
    // const validateEmail = (e) => {
    // var email = e.target.value
  
    // if (validator.isEmail(email)) {
    //   setEmailError('Valid Email :)')
    // } else {
    //   setEmailError('Enter valid Email!')
    // }

export default function Formm () {
  // A custom validation function. This must return an object

  // which keys are symmetrical to our values/initialValues

  
  const [val, setValue] = useState('')

  const validate = values => {
    const errors = {}

    if (!values.dname) {
    errors.dname = 'Required'
    }

    if (!values.email) {
      errors.email = 'Required'
    }
    else if(!validator.isEmail(values.email))
    {
        errors.email = 'Enter valid Email!'
    }

    // if (!values.number) {
    //   errors.number = 'Required'
    // } else if (values.number.length > 10) {
    //   errors.number = 'Must be 10 characters or less'
    // }

    if (!values.experience) {
      errors.experience = 'Required'
    }
    
    if (!values.clinic) {
        errors.clinic = 'Required'
    } 

    if (values.experience.length>150) {
        errors.experience = 'Letter limit is 150 words'
    }
    
    if (values.address.length>150) {
        errors.address = 'Letter limit is 150 words'
    } 

    if(values.edate<values.sdate){
      errors.edate='End date should e greater than start date'
    }

    return errors
  }

  const formik = useFormik({

    initialValues: {
      dname: '',
      country:'',
      number:'',
      email: '',
      experience:'',
      clinic: '',
      address:'',
      wexp:'',
      speciality:'',
      sdate:'',
      edate:'',
      education:[],
      StaticRange
    },
    validate,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
    }


  })

  const onChangeValueHandler =(val)=>{
    
  };
  const onChangeValueEducation =(val)=>{
    console.log(val);
  };

  return (<div >
    <h1 style={{width:"40%", margin:"auto", textAlign:"center"}}>Register </h1>
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="name" className='label'>Doctor name</label>

      <input
        id="dname"
        name="dname"
        type="name"
        placeholder="Full Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.dname}/>
      {formik.touched.dname && formik.errors.dname ? <div className='error'>{formik.errors.dname}</div> : null}
      
      <label htmlFor="speciality" className='label'>Speciality</label>
      <div >
     
      <select name="speciality" onChange={formik.handleChange}  onBlur={formik.handleBlur}
        value={formik.values.speciality} className="drop">
									<option selected value="0">--select--</option>
									<option value="Cardiology">Cardiology</option>
									<option value="Neurology">Neurology</option>
                  <option value="radiology">radiology</option>
									</select>
                  </div>

      <label htmlFor="email" className='label'>Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}/>
      {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
      
      <label htmlFor="number" className='label'>Mobile Number</label>
      <div className='countrycode'>
      <Country id="country" htmlFor="country"
       onChangeValue={onChangeValueHandler}
       
      />
      
      {formik.touched.country && formik.errors.country ? <div className='error'>{formik.errors.country}</div> : null}
      
      
      <input
        id="number"
        name="number"
        type="tel"
        placeholder="6386432858"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.number}/>
      </div>
      {formik.touched.number && formik.errors.number ? <div className='error'>{formik.errors.number}</div> : null}
      
      <label htmlFor="experience" className='label'>Experience(in years)</label>

      <input
        id="experience"
        name="experience"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.experience}/>
      {formik.touched.experience && formik.errors.experience ? <div className='error'>{formik.errors.experience}</div> : null}

      <label htmlFor="clinic" className='label'>Clinic</label>
      <input
        id="clinic"
        name="clinic"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.clinic}/>
      {formik.touched.clinic && formik.errors.clinic ? <div className='error'>{formik.errors.clinic}</div> : null}

      <label htmlFor="address" className='label'>Address</label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}/>
      {formik.touched.address && formik.errors.address ? <div className='error'>{formik.errors.address}</div> : null}

      <label htmlFor="wexp" className='label'>Work Experience</label>
      <input
        id="wexp"
        name="wexp"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.wexp}/>
      {formik.touched.wexp && formik.errors.wexp ? <div className='error'>{formik.errors.wexp}</div> : null}

      
      {/* <label htmlFor="edate">End Date</label> */}
      <div style={{display:"flex",flexDirection:'row',marginTop:"1rem",marginBottom:'1rem'}}>
      <label htmlFor="sdate" >Start Date</label>
     <input id="sdate"
        name="sdate" type="date" onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.sdate} style={{margin:'1rem'}}></input>
        {formik.touched.sdate && formik.errors.sdate ? <div className='error'>{formik.errors.sdate}</div> : null}
     <label htmlFor="edate" >End Date</label>
     <input id="edate"
        name="edate" type="date" onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.edate} style={{margin:'1rem'}} ></input>
        {formik.touched.edate && formik.errors.edate ? <div className='error'>{formik.errors.edate}</div> : null}
        </div>
      {/* <TableDatePicker/> */}
      <label htmlFor="service" style={{marginTop:"20px"}}>Education</label>
      <Education onChangeValue={onChangeValueEducation}/>

      <button type="submit">Register</button>

    </form>
  </div>)
}