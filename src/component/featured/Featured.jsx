import React from 'react'
import "./featured.css"

function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/375px-Indore_Rajwada01.jpg" alt="" />
            <div className="featuredTitle">
                <h1>Indore</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_960_720.jpg" alt="" />
            <div className="featuredTitle">
                <h1>Mumbai</h1>
                <h2>224 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" alt="" />
            <div className="featuredTitle">
                <h1>Delhi</h1>
                <h2>530 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured