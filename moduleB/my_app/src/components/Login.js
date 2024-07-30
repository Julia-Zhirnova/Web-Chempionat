import { useState } from 'react'


const Login = () => {
    
    const apiUrl = 'http://zimin404.beget.tech/api-file/authorization'
    
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    // Создание состояний под ошибки
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')    
    
    const signIn = async (element) => {
        element.preventDefault();

        const bodyJson = JSON.stringify({ 
            email,
            password,           
            })
    
        const bodyHeaders = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: bodyJson
        }
        const fetchData = await fetch(apiUrl, bodyHeaders)
        const dataFetch = await fetchData.json() 

        console.log(dataFetch)

        localStorage.setItem('token', dataFetch.data.token)

        if (dataFetch.message) {            
            setErrorEmail(dataFetch.message?. email ?? '')
            setErrorPassword(dataFetch.message?. password ?? '')
        }
    }        
    
    return ( <>
    
    <h1>Вход в систему</h1>
        <form className="registration card" onSubmit={signIn}>
            <label>Почта
                <input type="email" 
                onChange={element => setEmail(element.target.value)}
                />
            </label>
            {
            errorEmail &&
            <p> {errorEmail}</p>
            }
            <label>Пароль
                <input type="password"
                onChange={element => setPassword(element.target.value)}
                />
            </label>
            {
            errorPassword &&
            <p> {errorPassword}</p>
            }
            <button className="base-button">Войти</button>
        </form>

    </>
    )
}
export default Login