import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [accountInfo, setaccountInfo] = useState([]) //this declares a state cariable accountInfo  with empty array later it will update with data fetched from the backend
  //<p>accountInfo: {accountInfo.length}</p> This shows how many accounts are currently in the state array
  useEffect(()=>{
    axios.get('api/accountInfo')
    .then((response)=>{
      setaccountInfo(response.data)
    })
    .catch((error)=>{
      console.log(error)
    });
  },[]
)
  
  return (
    <>
      <h1>hey beautiful</h1>
      <p>accountInfo: {accountInfo.length}</p> 

      {
        accountInfo.map((account,index)=>{
          return(
          <div key={account.id}>
            <h3>{account.name}</h3>
            <p>{account.content}</p>
          </div>
          ) 
        })
      }
    </>
  )
}

export default App
