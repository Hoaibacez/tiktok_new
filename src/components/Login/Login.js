import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import config from '../../config'
import styles from './Login.module.scss'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLoginClose = () => {
        alert('home page')
    }

    const handleLogin = () => {
        axios.post('/api/auth/login', {
            email,
            password
          })
          .then(function (res) {
              console.log(res.data.meta.token);
            window.localStorage.setItem('token', res.data.meta.token)
            handleLoginClose()
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <div className={styles.wrapper}>
            <h3>Log in to TikTok</h3>
            <div className={styles.model}>
                <p>Manage your account, check notifications, comment on videos, and more.</p>
                <label htmlFor="email">Email:</label>
                <input type="email" 
                    id="email" name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input 
                    className={styles.input}
                    type="password" 
                    id="password" 
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} 
                    />
                <Link to={config.routes.home} onClick={handleLogin}>
                    <button className={styles.button}>Log in</button>
                </Link>
            </div>
            <p>Don't have acc, 
                {/* <Link>Register</Link> */}
            </p>
        </div>
    )
}

export default Login