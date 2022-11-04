import React from "react";
import styles from './MyInput.module.css'
interface IMyInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, React.AriaAttributes{
}

export const MyInput = ({...props}:IMyInputProps) => {
  return (
    <input className={styles.myInput} {...props}/>
  )
}