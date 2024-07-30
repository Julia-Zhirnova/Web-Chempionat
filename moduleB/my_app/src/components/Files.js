import imageDelete from '../images/delete.png'
import imageDownload from '../images/download.png'
import imageEdit from '../images/edit.png'
import imageUser from '../images/user.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react' 
import { useEffect } from 'react'

const Files = () =>{    
    const [isFiles, setIsFiles] = useState([])

    const token = localStorage.getItem('token')

    const navigate = useNavigate()

    const destroyFile = async (element, file_id) => {
        element.preventDefault()

        const apiUrl = `http://zimin404.beget.tech/api-file/files/${file_id}`
        
        const bodyContent = {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                Authorization:  'Bearer ${token}',
            },   
                    
        }
        
        const fetchData = await fetch(apiUrl, bodyContent)
        const dataFetch = await fetchData.json() 

        console.log(dataFetch)       
        
    }

    const getFiles = async (element) => {
        const apiUrl = 'http://zimin404.begét.tech/api-file/files/disk'
        
        const bodyContent = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization:  'Bearer ${token}',
            },            
        }
        
        const fetchData = await fetch(apiUrl, bodyContent)
        const dataFetch = await fetchData.json() 

        console.log(dataFetch)
        
        setIsFiles(dataFetch.data)
    }
    
    useEffect(() => {
        getFiles()
    }, [])
    
    return <>
    
    <h1>Список файлов пользователя</h1>
        <div className="content-header">
            <div className="content-header-actions">
                <Link to="#" classNameName="base-button">
                    <span>+ Загрузить файл </span>
                </Link>
            </div>
        </div>
        <div className="content">
            <div className="content-panel">
                <div className="vertical-tabs">
                    <Link to="#" className="active">Мои файлы</Link>
                    <Link to="#">Доступные файлы</Link>
                </div>
            </div>
            <div className="content-main">
                <div className="file-table">
                    <div className="file-table__row">
                        <div className="file-table__cell">id</div>
                        <div className="file-table__cell">Имя файла</div>
                        <div className="file-table__cell"></div>
                    </div>
                    {isFiles.map(file => {
                        return (
                            <div key={file.file_id}>
                                <div className="file-table__row">
                            <div className="file-table__cell">{file.file_id}</div>
                            <div className="file-table__cell">{file.name}</div>
                            <div className="file-table__cell">
                                <button className="icon-button">
                                    <img src={imageDownload} alt="icon"/>
                                </button>
                                <button
                                onClick={() => 
                                    navigate('/edit/' + file.file_id + '/' + file.name)
                                }
                                className="icon-button icon-button--secondary">
                                    <img src={imageEdit} alt="icon"/>
                                </button>
                                <button className="icon-button">
                                    <img src={imageUser} alt="icon"/>
                                </button>
                                <button 
                                onClick={element => 
                                    destroyFile(element, file.file_id)    
                                }
                                className="icon-button icon-button--delete">
                                    <img src={imageDelete} alt="icon"/>
                                </button>
                            </div>
                                </div>
                            </div>
                        )
                    } )}
                    
                </div>
            </div>
        </div>

    </>
    }
    export default Files