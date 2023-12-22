import React, { useEffect } from 'react'
function useTitle(num) {
    useEffect(()=>{
        document.title=`sayi- ${num}`
      },[num])
}

export default useTitle;