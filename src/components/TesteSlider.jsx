import React from 'react'
import img from '../image/instruments/bateria.png'
import img2 from '../image/instruments/guitarra.png'

function TesteSlider() {
    return (
        <div>
            
            <li>
                <input type="radio" id="slide1" name="slide" checked/>
                <label for="slide1"></label>
                <img src={img} alt="sdsds"  />
            </li>
            <li>
                <input type="radio" id="slide2" name="slide" checked/>
                <label for="slide2"></label>
                <img src={img2} alt="sdsd" />
            </li>
        </div>
    )
}

export default TesteSlider
