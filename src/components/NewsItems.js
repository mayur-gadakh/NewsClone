import React, { Component } from 'react'
import '../App.css';

const NewsItems =(props)=> {

    
    
       let {title,descrition,imgurl,newsurl,auther,time}=props
        return (
            <>
            <div className='my-3' >
                <div className="news">
                    <img src={!imgurl?"https://assets.entrepreneur.com/content/3x2/2000/1675180545-GettyImages-1390011916.jpg":imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{descrition}</p>
                        <p class="card-text"><small class="text-muted">By {auther} in {time}</small></p>

                        <a rel="noreferrer"href={newsurl} target="_blank" className="btn btn-dark">Read more..</a>
                    </div>
                </div>
                
                

            </div>
            
            </>
        )
    
}

export default NewsItems
