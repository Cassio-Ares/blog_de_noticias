'use client'

import {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const [form, setForm] = useState({
    email: '',
    senha: ''
  })

  const router = useRouter()


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
     const result = await axios.post('http://localhost:8080/login', form)
     alert(result.data.message)
     router.push('/admin/noticia/criar')
  } catch (error) {
    alert(error.response.data.message)
  }

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
            <input type="password" name="senha" onChange={handleChange}/>
        </div>
        <button type="submit">Login</button>
     </form>
     </>
  )
}

export default LoginForm