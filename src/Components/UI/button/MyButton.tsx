import styles from './MyButton.module.css'
import React, {HTMLAttributes} from "react";

interface IMyButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes{
  children: React.ReactNode;
  props?: HTMLAttributes<HTMLButtonElement>
}

export const MyButton = ({children, ...props}: IMyButtonProps) => {
  return (
    <button {...props} className={styles.myBtn +' ' + props.className}>
      {children}
    </button>
  )
}