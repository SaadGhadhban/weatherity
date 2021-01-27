import React from 'react';
import { WiThermometer,WiCloudy,WiDaySunny,WiSnow,WiFog,WiNightAltCloudy,WiHot,WiStrongWind,WiDayCloudy,WiShowers,WiCelsius,WiDayShowers,WiNightClear,WiNightAltPartlyCloudy } from "weather-icons-react";
import { useGlobalContext} from './context'
import {AiOutlineClose,AiOutlineInfoCircle} from 'react-icons/ai'
import { GiSunrise,GiSunset} from 'react-icons/gi'



const Card = (state) => {
    const {cityName,dayName,countryName,uv,currentTemp,sunRise,sunSet,maxTemp,minTemp,windSpeed,nextWeather,weatherDescription,isDay,countryHour}= state.prob;
    const {weatherA,weatherB,weatherC,weatherD}= nextWeather;
    
    const {toggleInfo1,showInfo1,toggleInfo2,toggleInfo,animateClass} = useGlobalContext();

    const background = (cond,isDay) =>{
        
        if (cond.toLowerCase() === 'clear'&& isDay ===1) {
            return 'dayClear'
        } 
        if (cond.toLowerCase() === 'clear'&& isDay ===0) {
            return "nightClear" 
        }
        if (cond.toLowerCase() ==='sunny'&& isDay ===1) {
            return 'dayClear'
        } 
        
        if (cond.toLowerCase() === ('cloudy' || 'overcast')&& isDay ===1) {
            return "dayCloudy" 
        }
        
        if (cond.toLowerCase() === ('cloudy'|| 'overcast')&& isDay ===0) {
            return "nightCloudy" 
        }
        if (cond.toLowerCase() === 'overcast'&& isDay ===0) {
            return "nightCloudy" 
        }
        if (cond.toLowerCase() === 'moderate rain at times'&& isDay ===0) {
            return "nightRainy" 
        }
        if (cond.toLowerCase() === 'moderate rain at times'&& isDay ===1) {
            return "dayRainy" 
        }
        if (cond.toLowerCase().search('rain') > -1&& isDay ===1) {
            return "dayRainy" 
        }
        if (cond.toLowerCase().search('rain') > -1&& isDay ===0) {
            return "nightRainy" 
        }
        
        if (cond.toLowerCase() === 'overcast'&& isDay ===1) {
            return "dayCloudy" 
        }
        
        if (cond.toLowerCase() === 'partly cloudy'&& isDay ===1) {
            return "dayCloudy"
        }
        if (cond.toLowerCase() === 'partly cloudy'&& isDay ===0) {
            return "nightCloudy"
        }
        if (cond.toLowerCase() === 'mist'&& isDay ===1) {
            return "dayMisty"
        }
        if (cond.toLowerCase() === 'fog'&& isDay ===1) {
            return "dayMisty"
        }
        if (cond.toLowerCase() === 'mist'&& isDay ===0) {
            return "nightMisty"
        }
        if (cond.toLowerCase() === 'fog'&& isDay ===0) {
            return "nightMisty"
        }
        
        if (cond.toLowerCase() === 'light rain'&& isDay ===0) {
            return "nightRainy"
        }
        if (cond.toLowerCase() === 'light rain shower'&& isDay ===0) {
            return "nightRainy"
        }
        if (cond.toLowerCase() === 'rainy'&& isDay ===0) {
            return "nightRainy"
        }
        if (cond.toLowerCase() === 'light rain'&& isDay ===1) {
            return "dayRainy"
        }
        if (cond.toLowerCase() === 'light snow'&& isDay ===1) {
            return "daySnowy"
        }
        if (cond.toLowerCase() === 'snow'&& isDay ===1) {
            return "daySnowy"
        }
        if (cond.toLowerCase() === 'light snow'&& isDay ===0) {
            return "nightSnowy"
        }
        if (cond.toLowerCase() === 'snow'&& isDay ===0) {
            return "nightSnowy"
        }
        if (cond.toLowerCase() === 'light rain shower'&& isDay ===1) {
            return "dayRainy"
        }
        if (cond.toLowerCase() === 'rainy'&& isDay ===1) {
            return "dayRainy"
        }
        if (cond.toLowerCase() === ('light rain shower'|| 'rainy'|| 'light rain')&& isDay ===1) {
            return "dayRainy"
        }
        if (cond.toLowerCase().search('snow') > -1&& isDay ===1) {
            return "daySnowy" 
        }
        if (cond.toLowerCase().search('snow') > -1&& isDay ===0) {
            return "nightSnowy" 
        }
        
        else {
            console.log('error in weather background');}
    
    }
    
    const icons = (cond,isDay) =>{
            
            if (cond.toLowerCase().search('mist') > -1) {
                return <WiFog size={32}/> 
            }
            if (cond.toLowerCase() === 'clear'&& isDay ===1) {
                return <WiDaySunny size={32}/> 
            }
            if (cond.toLowerCase() === 'sunny'&& isDay ===1) {
                return <WiDaySunny size={32}/> 
            } 
            if (cond.toLowerCase() === 'clear'&& isDay ===0) {
                return <WiNightClear size={32}/> 
            } 
            if (cond.toLowerCase() === 'cloudy') {
                return <WiCloudy size={32}/> 
            }
            if (cond.toLowerCase() === ('snowy'|| 'snow')) {
                return <WiSnow size={32}/> 
            }
            if (cond.toLowerCase().search('snow') > -1) {
                return <WiSnow size={32}/> 
            }
            if (cond.toLowerCase().search('partly cloudy') > -1 && isDay ===0) {
                return <WiNightAltPartlyCloudy size={32}/>
            }
            if (cond.toLowerCase().search('partly cloudy') > -1 && isDay ===1) {
                return <WiDayCloudy size={32}/>
            }
            if (cond.toLowerCase() === ('light rain shower'|| 'rainy'|| 'light rain')) {
                return <WiShowers size={32}/> 
            }
            if (cond.toLowerCase().search('rain') > -1 ) {
                return <WiShowers size={32}/>
            }
            if (cond.toLowerCase() ==='overcast'&& isDay ===0) {
                return <WiNightAltCloudy size={32}/> 
            }
            
            if (cond.toLowerCase() ==='overcast'&& isDay ===1) {
                return <WiDayCloudy size={32}/> 
            }
            else {
                return <WiCloudy size={32}/>}
        
    }

    
    // const [isDayB,condB,tempB] = weatherB;
    // const [isDayC,condC,tempC] = weatherC;
    // const [isDayD,condD,tempD] = weatherD;
    // console.log(isDayD,condC,tempB);
    
    return ( <div className={`cards ${background(weatherA[1],weatherA[0])}`}>
        <div className='card-head' >
        
    <div className='weather-status'>
        <div className='card-body'>
        <div className='temp-box'>
    <h2 className='temp'>
        {currentTemp}<WiCelsius size={69} viewBox={"8 0 30 30"}/>
    </h2>

    <h3 className='chilly'>{weatherA[0] ===1?" (Day)":"(Night)"}</h3>
        <h3 className='chilly'>{weatherA[1]}</h3>
        </div>
        <div className='location'>
            <h4 className='location-a'>{countryName}, {cityName}</h4>
        </div>
        </div>  
    </div>
    
    </div>
    <div className='card-fotter'>
        <div className='card-nav'>
            <h3>{dayName}</h3>
            <div>
                 <span>
                     <button className='temp-nav-btn'onClick={()=>toggleInfo()}>
                     <WiThermometer size={26}/>
                     </button>
                     <button className='temp-nav-btn' onClick={()=>toggleInfo1()}>
                     <AiOutlineInfoCircle size={24}/>
                     </button>
                     <button className='temp-nav-btn' onClick={()=>toggleInfo2()}>
                     <WiDaySunny size={26}/>
                     </button>
                     </span> 
             </div>
        </div>
        <div className='line'></div>
        <div className = {`fotter-nav ${animateClass()}`}>
        
        <div className='weather-data'>
            <div className="data-column data-1">
                <p>Now</p>
                {icons(weatherA[1],weatherA[0])}
                <p>{currentTemp}</p>
            </div>
            <div className="data-column data-1">
                <p>{countryHour + 1=== 24?0:countryHour +1}:00</p>
                {icons(weatherB[1],weatherB[0])}
                <p>{weatherB[2]}</p>
            </div>
            <div className="data-column data-1">
                <p>{countryHour +2=== 25?1:countryHour +2}:00</p>
                {icons(weatherC[1],weatherC[0])}
                <p>{weatherC[2]}</p>
            </div>
            <div className="data-column data-1">
                <p>{countryHour +3=== 26?2:countryHour +3}:00</p>
                {icons(weatherD[1],weatherD[0])}
                <p>{weatherD[2]}</p>
            </div>
        </div>
        <div className='info-data'>
            <div className='day-temp'>
                <p>High / Low</p>
                <WiCelsius size={40} />
                <p>{maxTemp} / {minTemp}</p>
                
            </div>
            <div className='day-temp'>
                <p>Wind speed</p>
                <WiStrongWind size={39} fill={'rgb(112, 141, 204)'}/>
                <p>{windSpeed} /kph</p>
            </div>
            <div className='day-temp'>
                <p>UV</p>
                <WiHot size={39} fill={'rgb(165, 132, 70)'}/>
                <p>{uv}</p>
            </div>
        </div>
        <div className='info-data2'>
            
                <div>
                    <GiSunrise size={33}/>
                    <p>sunrise</p>
                    <p>{sunRise}</p>
                </div>

                <div>
                    <GiSunset size={33}/>
                    <p>Sunset</p>
                    <p>{sunSet}</p>
                </div>
                
                 

        </div>
        </div>
    </div>
    </div> );
}
 
export default Card;