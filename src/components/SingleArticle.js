import React from 'react'
import Header from './Header'
import Footer from './Footer'

import {useSelector} from 'react-redux'


const SingleArticle = () => {
   
const title = useSelector(state => state.temporaryBlogTitle)
const imageurl = useSelector(state => state.temporaryBlogImageUrl)
const author = useSelector(state => state.temporaryBlogAuthor)
const description = useSelector(state => state.temporaryBlogDescription)


    return (
        <div className="app">
                <Header/>
                <div className="blogExpert">
                    <h1>{title}</h1>
                    <h6>autor artykułu: {author}</h6>
                    <img  style={{ margin: '0 auto', display: 'block' }} src={`http://localhost:5000/${imageurl}`} alt={title} />
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                    
                 </div>
                <Footer/>
        </div>
    )
}

export default SingleArticle