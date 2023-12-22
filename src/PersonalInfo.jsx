import React from 'react'
import { useState } from 'react'
import useInput from './useInput'
function PersonalInfo() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

 const [firstName,bindFirstName,resetFirstName]=useInput('');
 const [lastName,bindLastName,resetLastName]=useInput('');

    const submitInput=(e)=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }

return (
 <form onSubmit={submitInput}>
    <div>
        <label>Ad</label>
        <input
         type="text" 
        {...bindFirstName}
         />
    </div>
    <div>
        <label>Soyad</label>
        <input
         type="text" 
         {...bindLastName}
         />
    </div>
    <button>Göster</button>
 </form>
    )
}

export default PersonalInfo