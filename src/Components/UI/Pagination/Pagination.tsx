import {MyButton} from "../button/MyButton";
import React, {useMemo} from "react";
import styles from './Pagination.module.css'
import {getPagesArray} from "../../../utils/page";

interface IPaginationProps {
  totalPages: number;
  changePage: (p:number)=> void;
  page: number;
}

export const Pagination = ({totalPages,changePage, page}:IPaginationProps) => {

  let pagesArray = useMemo(()=> getPagesArray(totalPages), [totalPages])
  return (
    <div className={styles.pages__wrapper}>
      {pagesArray.map(p =>
        <MyButton
          onClick={()=> changePage(p)}
          key={p}
          className={page===p ? styles.page__current: ''}
        >{p}</MyButton>
      )}
    </div>
  )
}