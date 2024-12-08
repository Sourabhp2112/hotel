import { faBed, faCalendar, faCalendarAlt, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Children, Fragment, useState } from 'react'
import { DateRange } from 'react-date-range'
import './header.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom'

function Header({type}) {

    let [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    let [openDate,setOpenDate] = useState(false);
    let [destination,setDestination] = useState("")

    let [openOption,setOpenOption] = useState(false)
    let [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })
    let navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };
    

    let handleSearch = ()=>{
        navigate("/hotels",{state:{destination,date,options}})
    }

    return (
        <div >

            <section className='headerSec'>
                <div className={type ==="list" ? 'headerDivList listMode': 'headerDivList'}>
                    <div className='headerDiv'>
                        <div className='headerList' id='headerStay'>
                            <FontAwesomeIcon icon={faBed} />
                            <span>Stays</span>
                        </div>
                        <div className='headerList'>
                            <FontAwesomeIcon icon={faPlane} />
                            <span>Flight</span>
                        </div>
                        <div className='headerList'>
                            <FontAwesomeIcon icon={faCar} />
                            <span>Car rentals</span>
                        </div>
                        <div className='headerList'>
                            <FontAwesomeIcon icon={faBed} />
                            <span>Attractions</span>
                        </div>
                        <div className='headerList'>
                            <FontAwesomeIcon icon={faTaxi} />
                            <span>Airport taxis</span>
                        </div>
                    </div>
                { type !=="list" &&
                    
                        <div className='headDetails'>
                        <h1 className='headTitle'>A lifetime of discounts? It's Genius.</h1>
                        <p className='headPara'>Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account</p>
                        <button className='headButton'>Sign in / Register</button>
                    </div>
                    
                }

                </div>
            </section>

            {type !=="list" &&
            <div className="headerSearch" style={{ position: 'absolute', marginTop: '-35px', width: '65%', background: 'white', marginLeft: '16%' }}>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} />
                <input type="text" placeholder='Where are you going?' onChange={e=>setDestination(e.target.value)} />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span onClick={()=>{setOpenDate(!openDate)}}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='headDate'
                    minDate={new Date()}
                />}

            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} />
                <span onClick={()=>{setOpenOption(!openOption)}}>{`${options.adult} adult. ${options.children} Children. ${options.room} room.`}</span>
            {openOption && 
                <div className="options">
                    <div className="optionItems">
                        <span className="optionText">Adult</span>
                        <div className='optionCountDiv'>
                        <button className="personRemove" 
                        disabled = {options.adult <= 1} onClick={()=>handleOption("adult","d")}
                        >-</button>
                        <span>{options.adult}</span>
                        <button className="personAdd" onClick={()=> handleOption("adult","i")}
                        >+</button>
                        </div>
                    </div>
                    <div className="optionItems">
                        <span className="optionText">Children</span>
                        <div className='optionCountDiv'>
                        <button className="personRemove"
                        disabled={options.children<=0} onClick={()=>handleOption("children","d")}
                        >-</button>
                        <span>{options.children}</span>
                        <button className="personAdd" onClick={()=>handleOption("children","i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItems">
                        <span className="optionText">Room</span>
                        <div className='optionCountDiv'>
                        <button className="personRemove" disabled={options.room<=1} onClick={()=>handleOption("room","d")}>-</button>
                        <span>{options.room}</span>
                        <button className="personAdd" onClick={()=>handleOption("room","i")}>+</button>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="headerSearchItem">
                <button className='headSearchButton' onClick={handleSearch}>Search</button>
            </div>
        </div>
            }

        </div>
    )
}

export default Header