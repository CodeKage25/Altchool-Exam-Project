import { useEffect, useState } from "react"
import {useErrorHandler} from "react-error-boundary"


export default function useFetch(url){
  const handleError = useErrorHandler();
  const [loading,setLoading]=useState(false)

  const [data,setData]=useState([])
 
  useEffect(()=>{
    const fetchData=async()=>{
      setLoading(true)
  try {
        const res =await fetch(url)
        const doc = await res.json()
        setLoading(false)
        setData(doc)
  } catch (error) {
      setLoading(false)
      handleError(error);
  }
    }
    fetchData()
  },[url])
  return{loading,data}
}