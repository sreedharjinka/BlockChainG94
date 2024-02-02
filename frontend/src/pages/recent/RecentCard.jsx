import {React, useState,useEffect} from "react"
// import { list } from "../data/Data"

const RecentCard = ({togglePop}) => {
  const [list,setList]=useState([]);

  const load =async()=>{
    const response = await fetch('https://backend-gamma-silk.vercel.app/api/user/allprods', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://frontend-amber-tau-20.vercel.app'
      }
    })

    console.log(response)
    const list = await response.json()
    setList(list.prods)
    // console.log()
  }
  useEffect(()=>{
    load()
},[])

  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { img,  des, uname, price} = val
          return (
            <div className='box shadow' key={index} onClick={()=> togglePop(val) }>
              <div className='img'>
                <img src={img} alt='' />
              </div>
              <div className='text'>
                
                <h4>{uname}</h4>
                <p>
                  {des}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price} ETH</button> 
                </div>
                
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
