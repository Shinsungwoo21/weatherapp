import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = ({cities, setCity}) => {

  return (
    <div className="buttons">
        <Button className="button" variant="warning">Current Location</Button>
        
        {cities.map((item, index) => (
          <Button 
            className="button" 
            variant="warning" 
            key={index}
            onClick={()=>setCity(item)}
          >
            {item}
          </Button>
        ))}
    </div>
  )
}

export default WeatherButton
