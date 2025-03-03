import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const params = useParams('file_id', 'file_name')
    const token= "bNpxTLp617b28kWwoqwPHKuNm7w8tDoToQ2"

    const [name,setName] = useState([])

    const editName = async (element) => {
        element.preventDefault();
        const apiUrl = `http://ushka6y7.beget.tech/api/files/${params.file_id}`
        
        const bodyJson = JSON.stringify({ name })

        const bodyContent = {
            method: 'PATCh',
            headers:{
                'Content-Type': 'application/json',
                Authorization:  'Bearer ${token}',
            },   
            body: bodyJson,         
        }
        
        const fetchData = await fetch(apiUrl, bodyContent)
        const dataFetch = await fetchData.json() 

        console.log(dataFetch)       
        
    }

    return <>
    
    <h1>Файл {params.file_name}</h1>
        <form className="registration card">
            <label>Имя
                <input type="text"/>
            </label>
            <button className="base-button">Обновить</button>
        </form>
    
    </>
    }

    export default Edit