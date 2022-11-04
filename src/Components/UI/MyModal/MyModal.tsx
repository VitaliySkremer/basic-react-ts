import styles from './MyModal.module.css';
import React from "react";

interface IMyModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (flag: boolean)=> void;
}

export const MyModal = ({children, visible, setVisible}: IMyModalProps) => {

  const rootClasses = [styles.myModal];
  if(visible){
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
      <div className={styles.myModalContent} onClick={(event)=> event.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}