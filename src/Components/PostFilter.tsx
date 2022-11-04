import {MyInput} from "./UI/input/MyInput";
import {MySelect} from "./UI/Select/MySelect";
import React from "react";
import {IFilter} from "../Model/ModalFilter";

interface IPostFilterProps {
  filter:IFilter;
  setFilter: (filter: IFilter)=> void;
}

export const PostFilter = ({filter, setFilter}: IPostFilterProps) => {
  return (
    <div>
      <MyInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={(event)=> setFilter({...filter, query: event.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort=> setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка по:"
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
    </div>
  )
}