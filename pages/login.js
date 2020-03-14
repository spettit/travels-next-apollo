import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ submitting, setSubmitting ] = useState(false)

const strapilogin = (username, password) => {
    axios
  .post('https://travel-strapi-app.herokuapp.com/auth/local', {
    identifier: username,
    password: password,
  })
  .then(response => {
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
}

const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    strapilogin(username, password)
    setSubmitting(false)
}

    return (
        <div>
        login
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="submit" disabled={submitting}/>
        </form>
    </div>
    )
}

export default (Login)