import React from 'react'

export default function InputGroup({label, type, placeholder, labelFor, classes}) {
  return (
    <label className={`input-group ${classes || ''}`} htmlFor={labelFor}>
      <label htmlFor={labelFor}>{label}</label>
      <input type={type} placeholder={placeholder} id={labelFor} />
    </label>
  )
}
