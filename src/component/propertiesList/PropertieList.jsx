import React from 'react'
import './propertieList.css'

function PropertieList() {
  return (
   <section className='pListSec'>
     <div className='pList'>
        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsr9KJOvwKi_1N7_TUJ-Lzso-vbTMqqx2KmA&s" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Hotels </h1>
                <h2>501 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=vgQesOXDRzz0UfOZxmUtE-rFe75YgA9GvkKS8eeeumE=" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Apartments </h1>
                <h2>1025 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrbATAFm04XVYMiA5x3t6ZIyedBYRYj9syA&s" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Resorts </h1>
                <h2>220 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAkKyaahtk3L8rBWy5uWpeqqqVQGn1Fqp6w&s" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Villas </h1>
                <h2>605 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdW-VlUr8BfFWzhim10D2WMwyQs1G9JsYBNg&s" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>cabins </h1>
                <h2>400 Hotels</h2>
            </div>
        </div>
    </div>
   </section>
  )
}

export default PropertieList