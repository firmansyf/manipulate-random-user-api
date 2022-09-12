import './App.css'
import { useState, useEffect } from 'react'
import { getCurrency } from './api/service'



function Card() {
  const [data, setData] = useState([])

  useEffect(() => {
    getCurrency()
     .then((res) => {
        setData(res)
     }).catch(() => '')
  }, [])


  return (
    <>  
    <div className='App'>
      <table>
        <thead>
          <th>Currency</th>
          <th>We Buy</th>
          <th>Exchange Rate</th>
          <th>We sell</th>
        </thead>
        <tbody>
        {Array.isArray(data) && data?.map((item, i) => {
          return (
            <>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </>
          )
        })}
        </tbody>
      </table>
    </div>
    </>
  )

} 


function App() {
  return (
   <>
      <Card />
   </>
  );
}

export default App;
