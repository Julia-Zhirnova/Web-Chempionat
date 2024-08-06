import { useState } from 'react'

const Register = () => {
    const api = 'http://ushka6y7.beget.tech/api/registration'

    const [first_name, setFirstName] = useState([])
    const [last_name, setLastName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    // Создание состояний под ошибки
 /*   const [errorFirstName, setErrorFirstName] = useState('')
    const [errorLastName, setErrorLastName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('') */


    const signUp = async (element) => {
        element.preventDefault()
        
        /*const apiAdd = "https://freefakeapi.io/api/posts"*/
        
        const bodyJson = JSON.stringify({ 
            email,
            password,           
            first_name: first_name,
            last_name: last_name})
    
        const bodyHeaders = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: bodyJson
        }
        const fetchData = await fetch(api, bodyHeaders)
        const dataFetch = await fetchData.json() 

        console.log(dataFetch)

       /* if (dataFetch.message) {
            setErrorFirstName(dataFetch.message?.first_name ?? '')
            setErrorLastName(dataFetch.message?. last_name ?? '')
            setErrorEmail(dataFetch.message?. email ?? '')
            setErrorPassword(dataFetch.message?. password ?? '')
        } */
}

    return (
    
    <> 
    
    <h1>Регистрация</h1>
        <form className="registration card" onSubmit={signUp}>
            
            <label>Фамилия
                <input type="text"
                
               onChange={element => setLastName(element.target.value)} /> 
            </label>
            {
         /*    errorLastName &&
            <p> {errorLastName}</p> */
            }
            <label>Имя
                <input type="text"
                onChange={element => setFirstName(element.target.value)} />
            </label>
            {
         /*    errorFirstName &&
            <p> {errorFirstName}</p> */
            }
            <label>Почта
                <input type="email"
                onChange={element => setEmail(element.target.value)} />
            </label>
            {
         /*    errorEmail &&
            <p> {errorEmail}</p> */
            }
            <label>Пароль
                <input type="password"
                 onChange={element => setPassword(element.target.value)} />
            </label>
            {
          /*  errorPassword &&
            <p> {errorPassword}</p> */
            } 
            <button className="base-button">Зарегистрироваться</button>
        </form>

    </>
    )
}
export default Register