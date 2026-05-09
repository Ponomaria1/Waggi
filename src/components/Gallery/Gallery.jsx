import React from 'react'
import './gallery.scss'
import images from './../../assets/dataGallery'


function Gallery() {
  return (
     <section className="gallery">
       <div className="gallery__grid">
        {
            images.map((img, index)=>{
                return (
                    <img key={index} src={img}></img>
                )
            })
        }
    
       </div>
     </section>
  )
}

export default Gallery