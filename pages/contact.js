import React, { useState } from 'react'
import styles from '../styles/contact.module.css'


const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')

  const hundleForm = (e) =>{
      e.preventDefault()
      console.log(name , phone ,email, desc)
      
      const data = {phone,email,name,desc}
      
      fetch('http://localhost:3000/api/postContact/' , {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json' 
        },
        body : JSON.stringify(data),
        
      })
      .then(responce => responce.text())
      .then(data =>{
        console.log('Success:', data);
        alert("Thanks for Contact Us")
        setName('')
        setPhone('')
        setEmail('')
        setDesc('')
      })
      .catch((error)=>{
        console.log('Error:' , error)
      })

  }
  const hundleInput = (e) => {
    if(e.target.name == "name"){
      setName(e.target.value)
    }
    else if(e.target.name == "email"){
      setEmail(e.target.value)
    }
    else if(e.target.name == "phone"){
      setPhone(e.target.value)
    }
    else if(e.target.name == "desc"){
      setDesc(e.target.value)
    }
  }
  return (
    <div className={styles.container}>
      <h1>Contact Form</h1>
    <form onSubmit={hundleForm} >  
    <div className={styles.mb3}>
    <label htmlFor="name" className={styles.formLabel}>Enter your Name</label>
    <input type="text" className="form-control" id="name" onChange={hundleInput} value={name} name="name"/>
  </div>
  <div className={styles.mb3}>
    <label htmlFor="email" className={styles.formLabel}>Email Address</label>
    <input type="email" className="form-control" id="email" onChange={hundleInput} value={email} name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formLabel}>Enter your Phone Number</label>
    <input type="number" className="form-control" onChange={hundleInput} value={phone} name="phone" id="phone"/>
  </div>
  <div className={`${styles.mb3} form-check`}>
    <label className="desc" htmlFor="desc">Elaborate your concern</label>
    <textarea className='form-control' onChange={hundleInput} value={desc} placeholder='Write your concern here'  name="desc" id="desc" cols="30" rows="10"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    
  
    </div>
  )
}

export default Contact