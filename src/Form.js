import React from 'react'
import { FormContext } from './FormContext';


const Form = ({ type, id, children }) => {


  const capitalize = str => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

  const context = React.useContext(FormContext)


  return (
    <label htmlFor={id}>
      {capitalize(id)}
      <input type={type} id={id} value={context[`${id}`]} onChange={(event) => context.setForm({ ...context.form, [id]: event.target.value })} />
    </label>
  )

}

export default Form
