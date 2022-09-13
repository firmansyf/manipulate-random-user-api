import './App.css'
import { useState, useEffect } from 'react'
import { getCurrency } from './api/service'

function Card() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCurrency()
     .then(({data : res}) => {
        setData(res)
        setLoading(false)
     }).catch(() => '')
  }, [])

  const customStye = {
    label: 'border text-center p-2',
    text : 'text-dark fw-bolder',
    
  }

  return (
    <>  
    <div className='App'>
      <div className='section'>
        <div className='row'>
          <div className='col-12'>
            <table className='table shadow'>
                <tr className=''>
                  <th className={`${customStye.label} ${customStye.text}`}>No</th>
                  <th className={`${customStye.label} ${customStye.text}`}>Currency Code</th>
                  <th className={`${customStye.label} ${customStye.text}`}>Currency Name</th>
                  <th className={`${customStye.label} ${customStye.text}`}>Icon</th>
                  <th className={`${customStye.label} ${customStye.text}`}>Status</th>
                </tr>
                
               {loading && (
                  <>
                    <div className='d-flex text-primary justify-content-center align-items-center position-absolute mt-4' style={{width: 200}}>
                      <span className='spinner-border'></span> &nbsp; loading...
                    </div>
                  </>
                )}

                {!loading && (
                Array.isArray(data) && data.slice(0, 7).map(({currencyCode, currencyName, icon, status}, i) => {
                  return (
                    <>
                      <tr>
                        <td className={`${customStye.label} ${customStye.text}`}>{i + 1}</td>
                        <td className={`${customStye.label} text-primary`}>{currencyCode}</td>
                        <td className={`${customStye.label} ${customStye.text}`}>{currencyName}</td>
                        <td className={`${customStye.label} ${customStye.text}`}><img src={icon} aly='Icon' style={{width: 36}} /></td>
                        <td className={`${customStye.label} text-success fw-bolder`}>{status}</td>    
                      </tr>
                   </>
                  )
                  }))}
            </table>
          </div>
        </div>
      </div>     
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
