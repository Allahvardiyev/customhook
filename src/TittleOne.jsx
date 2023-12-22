
import { useState,useEffect } from 'react'
import useTitle from './useTitle'
function TittleOne() {
    const [num, setNum] = useState(0)
  useTitle(num)
  return (
    <div>
        <button onClick={()=>setNum(num+1)}>Sayi-{num}</button>
       
    </div>
  )
}

export default TittleOne