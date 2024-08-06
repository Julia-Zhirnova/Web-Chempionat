import imageDelete from '../images/delete.png'
import imageDownload from '../images/download.png'
import imageEdit from '../images/edit.png'
import imageUser from '../images/user.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react' 
import { useEffect } from 'react'

const Files = () =>{    
    const [isFiles, setIsFiles] = useState([])
    const [files,setFiles] = useState([])

   // const token = "bNpxTLp617b28kWwoqwPHKuNm7w8tDoToQ2"

    const navigate = useNavigate()

    const destroyFile = async (element, file_id) => {
        element.preventDefault()

        const apiUrl = `http://ushka6y7.beget.tech/api/files/${file_id}`
        
        const bodyContent = {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
               // Authorization:  'Bearer ${token}',
                Authorization:  'Bearer x3sqT5t46DIZnoiOqqWP5DG95sLRZW9Y7Ll',
            },   
                    
        }
        
        const fetchData = await fetch(apiUrl, bodyContent)
        const dataFetch = await fetchData.json() 

        console.log(dataFetch)       
        
    }

  /*  const uploadFile = async (element) => {
        const apiUrl = `http://ushka6y7.beget.tech/api/files/`
        const bodyJson = JSON.stringify({ 
            files           
            })
        
        const bodyContent = {
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
               // Authorization:  'Bearer ${token}',
                Authorization:  'Bearer x3sqT5t46DIZnoiOqqWP5DG95sLRZW9Y7Ll',
            }, 
            body: bodyJson,  
                    
        }
        
        const fetchData = await fetch(apiUrl, bodyContent)
        const dataFetch = await fetchData.json() 

        console.log(dataFetch)       
        
    }*/


    const getFiles = async (element) => {
        const apiUrl = 'http://ushka6y7.beget.tech/api/files/show'

        //const bodyJson = JSON.stringify({ name })

        
        const bodyContent = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                //Authorization:  'Bearer ${token}',
                Authorization:  'Bearer x3sqT5t46DIZnoiOqqWP5DG95sLRZW9Y7Ll',
            },            
        }
        
        const fetchData = await fetch(apiUrl, bodyContent)
        const dataFetch = await fetchData.json() 

        console.log(dataFetch)
        
        //setIsFiles(dataFetch.data)
        setIsFiles(dataFetch)
    }
    
    useEffect(() => {
        getFiles()
    }, [])
    
    return <>
    
    <h1>Список файлов пользователя</h1>
        <div className="content-header">
            <div className="content-header-actions">
                <Link to="#"  className="base-button">
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
                    {//isFiles?.map(file => {                     
                       // return (
                            <div key={isFiles.file_id}>
                                <div className="file-table__row">
                            <div className="file-table__cell">{isFiles.file_id}</div>
                            <div className="file-table__cell">{isFiles.name}</div>
                            <div className="file-table__cell">
                                <button                                                               
                                className="icon-button">                              
                                    
                                    <img src={imageDownload} alt="icon"/>
                                </button>
                                <button
                                onClick={() => 
                                    navigate('/edit/' + isFiles.file_id + '/' + isFiles.name)
                                }
                                className="icon-button icon-button--secondary">
                                    <img src={imageEdit} alt="icon"/>
                                </button>
                                <button className="icon-button">
                                    <img src={imageUser} alt="icon"/>
                                </button>
                                <button 
                                onClick={element => 
                                    destroyFile(element, isFiles.file_id)    
                                }
                                className="icon-button icon-button--delete">
                                    <img src={imageDelete} alt="icon"/>
                                </button>
                            </div>
                                </div>
                            </div>
                       // )
                  //  } )
                  }
                    
                </div>
            </div>
        </div>

    </>
    }
    export default Files