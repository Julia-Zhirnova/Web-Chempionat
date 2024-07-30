import { useState } from 'react' 
import { useEffect } from 'react'

const Fetch = () => {
    const api = 'https://freefakeapi.io/api/posts?limit=6'
    // const api_comments = 'https://freefakeapi.io/api/comments?limit=6' не заработала ссылка у него
    
    const [isData, setIsData] = useState([])

    const [title, setTitle] = useState([])
    const [content, setContent] = useState([])
    const [slug, setSlug] = useState([])
    const [picture, setPicture] = useState([])
    const [user,setUser] = useState([])

    const [post, setPost] = useState([])
    // const [isComments, setIsComments] = useState([])

    const addPost = async (element) => {
        element.preventDefault()
        
        const apiAdd = "https://freefakeapi.io/api/posts"
        
        const bodyJson = JSON.stringify({ title, content, slug, picture, user})
    
        const bodyContent = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: bodyJson
        }

        const fetchPost = await fetch(apiAdd, bodyContent)
        const dataFetch = await fetchPost.json() 

        console.log(dataFetch)    
    }

    /*const getComments = async () => {
        const bodyContent = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        }
        const fetchComments = await fetch(api_comments, bodyContent)
        const dataFetch = await fetchComments.json() 

        console.error(dataFetch)
    }*/

    const getData = async () => {
        const headers = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
        },
    }
    const fetchData = await fetch(api, headers)
    const dataFetch = await fetchData.json()    

    setIsData(dataFetch)
    console.log(dataFetch)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
        {isData.map(item => {
            return (
                <div key={item.id}>
                    <h2> {item.id} </h2>
                    <h1> {item.title} </h1>
                    <p> {item.content} </p>
                </div>
            )
        })}

        <form onSubmit={addPost}>
            <input
                type='text'
                onChange={element => setTitle(element.target.value)}
                placeholder='Title'            
            ></input>

            <input
                type='text'
                onChange={element => setContent(element.target.value)}
                placeholder='content'            
            ></input>

            <input
                type='text'
                onChange={element => setSlug(element.target.value)}
                placeholder='Slug'            
            ></input>
                        
            <input
                type='text'
                onChange={element => setPicture(element.target.value)}
                placeholder='Picture'            
            ></input>

            <input
                type='number'
                onChange={element => setUser(element.target.value)}
                placeholder='User ID'            
            ></input>

            <input type='submit' value={'Отправить'}></input>

        </form>
        </>
    )
}

export default Fetch