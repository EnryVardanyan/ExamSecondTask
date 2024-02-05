import React, {useState} from 'react';
import CloseBtn from './CloseBtn'

const Form = ({onClose}) => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
  });
  const onUpdateField = (e) => {
    const formState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(formState);
    console.log(formState)
  };
  const onSubmit = (e) => {
    e.preventDefault()
    const formValues = {
      ...form
    }
    if(Object.values(formValues).join("").includes(" ")) console.log("false")
    
  }

  return (
    <form className='form'>
      <CloseBtn onClose={onClose}/>
      <label>
        First Name
        <input type="text" name='fname' onChange={onUpdateField}/>
      </label>
      <label>
        Last Name
        <input type="text" name='lname' onChange={onUpdateField}/>
      </label>
      <label>
        Gender
        <select>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <input type="submit" value="Submit" className='btn' onClick={onSubmit}/>
    </form>
  );
};

export default Form;