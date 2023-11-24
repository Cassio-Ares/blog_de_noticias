'use client'

import {useState} from 'react'

const LoginForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })


  const handleSubmit = (e) => {
  e.preventDefault();
  console.log('login ok', form)
  }


  const handleChange = (e) => {
    e.preventDefault();
    setForm({
    ...form,
      [e.target.name]: e.target.value
    })
  }



  return (
     <>
     <form onSubmit={handleSubmit}>
        <div>
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange}/>
        </div>
        <div>
            <label>Senha</label>
            <input type="password" name="password" onChange={handleChange}/>
        </div>
        <button type="submit">Login</button>
     </form>
     </>
  )
}

export default LoginForm