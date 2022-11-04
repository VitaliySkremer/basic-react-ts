import {useState} from "react";

export function useFetch(callback: ()=> void){
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('');

  const fetching = async () =>{
    try{
      setIsLoading(true)
      await callback();
    } catch (error){
      if(error instanceof Error) setError(error.message);
    } finally {
      setIsLoading(false)
    }
  }

  return[fetching, isLoading, error] as const;
}