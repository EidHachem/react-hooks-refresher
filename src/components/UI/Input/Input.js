import React from "react"

import classes from "./Input.module.css"

const Input = ({ isValid, label, id, value, type, onChange, onBlur }) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="password">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export default Input
