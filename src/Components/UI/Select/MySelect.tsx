import { IOptions } from "../../../Model/ModalOptions";

interface IMySelectProps {
  options: IOptions[];
  defaultValue:string;
  value: string;
  onChange:(sort: string)=> void;
}

export const MySelect = ({options,defaultValue, value, onChange}: IMySelectProps) => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option=>
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      )}
    </select>
  )
}