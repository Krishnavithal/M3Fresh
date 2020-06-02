import React,{useState} from 'react'

function useCustomInputHandler(initialState){
const [values, setValues] = useState(initialState)
return [values, e => {
	setValues({...values,[e.target.name]:e.target.value})
}]
}

export default useCustomInputHandler