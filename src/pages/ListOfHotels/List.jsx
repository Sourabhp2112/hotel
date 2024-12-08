import React, { useState } from 'react'
import './List.css'
import Header from '../../component/header/Header'
import Navbar from '../../component/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../component/SearchItem/SearchItem'

function List() {

  let location = useLocation()
  let [destination,setDestination] = useState(location.state.destination)
  let [date,setDate] = useState(location.state.date)
  let [options,setOpenOptions] = useState(location.state.options)
  let [openDate,setOpenDate] = useState(false);

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className='listTitle'>Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in-date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDate && <DateRange onChange={(item)=>setDate([item.selection])} minDate={new Date()} ranges={date} className='dateRange'/>
              }
            </div>
            <div className="lsItem" id='dateRange'>
              <label>Options</label>
              <div className="lsOptions">
              <div className='lsOptionItem'>
                <span className='lsOptionSpan'>Min Price<small> per nigth</small></span>
                <input type="number" className='lsOptionInput'/>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionSpan'>Max Price<small> per nigth</small></span>
                <input type="number" className='lsOptionInput'/>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionSpan'>Adult</span>
                <input type="number" className='lsOptionInput' placeholder={options.adult} min={1}/>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionSpan'>Children</span>
                <input type="number" className='lsOptionInput' placeholder={options.children} min={0}/>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionSpan'>Room</span>
                <input type="number" className='lsOptionInput' placeholder={options.room} min={1}/>
              </div>
            </div>
            </div>
            <button className='lsSearchBtn'>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List

