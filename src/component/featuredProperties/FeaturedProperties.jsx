import React from 'react'
import './FeaturedProperties.css'

function FeaturedProperties() {
  return (
    <div className="fp">
    <div className="fpItem">
      <img
        src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwYmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Elite model luxury</span>
      <span className="fpCity">Indore</span>
      <span className="fpPrice">Starting from 1200 Rs</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Hotel Taj</span>
      <span className="fpCity">Mumbai</span>
      <span className="fpPrice">Starting from 2000 Rs</span>
      <div className="fpRating">
        <button>9.3</button>
        <span>Exceptional</span>
      </div>
    </div>
    <div className="fpItem">
      <img
       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNW4rxCtpDQsVB_1EDrXHVuuRh_Ox82ckEnw&s'
        className="fpImg"
      />
      <span className="fpName">Four Seasons Hotel</span>
      <span className="fpCity">Bengluru</span>
      <span className="fpPrice">Starting from 999 Rs</span>
      <div className="fpRating">
        <button>8.8</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
      <img
       src='https://2.imimg.com/data2/SI/TS/MY-3125576/lemon_tree_hotel_single-room.jpg'
        className="fpImg"
      />
      <span className="fpName">Hilton Garden Inn</span>
      <span className="fpCity">Delhi</span>
      <span className="fpPrice">Starting from 1150 Rs</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
  </div>
  )
}

export default FeaturedProperties