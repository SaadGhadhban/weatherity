import React,{useContext,useState,useEffect,useCallback} from 'react';
import {v4 as uuidv4} from 'uuid'




const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    
    
    const [state,setState] = useState([])
    const [link,setLink]= useState('')
    const [userIP,setUserIP]= useState('')
    const [userCity,setUserCity] = useState('')
    const [temp,setTemp] = useState('')
    const [cond,setCond] = useState('')
    const [search,setSearch] = useState(state)
    const [showInfo1,setShowInfo1] = useState(0)
 
    
    
    const toggleInfo = ()=>{
        setShowInfo1(0)
    }
    const toggleInfo1 = ()=>{
        setShowInfo1(1)
    }
    const toggleInfo2 = ()=>{
        setShowInfo1(2)
    }
    const animateClass = () =>{
        if (showInfo1 === 0){
            return ''
        }
        if (showInfo1 === 1){
            return 'animate-data1'
        }
        if (showInfo1 === 2){
            return 'animate-data2'
        }
    }


     fetch('https://api.ipify.org/?format=json').then(result => result.json()).then(data => {
         let ip = data.ip;
         setUserIP(ip)
     })
     console.log(userIP);
    const userLocation = async (ip)=>{
        const response = await fetch(`http://api.ipstack.com/${ip}?access_key=${process.env.REACT_APP_LOCATION_KEY}`)
        if (response.ok){
            const info = await response.json();
            const userCity = info.city.toLowerCase()
            setUserCity(userCity)
        } else {
            console.log('failed to get user location');
        }
    }
    
    const userForecast = async (city)=>{
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${city}&days=4`)
        if (response.ok){
        const info = await response.json();
        const userCurrentTemp = Math.round(info.current.temp_c)
        const userCurrentCond = info.current.condition.text
        setTemp(userCurrentTemp)
        setCond(userCurrentCond)

        } else {
            console.log('failed to get user forecast');
        }
    }
    useEffect(() => {
        if (userCity){
        userForecast(userCity)
        setLink(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=riyadh&days=4`)
        
        
        }
    }, [userCity])
    

    useEffect(() => {
        if (userIP){
        userLocation(userIP)
        setLink(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=tokyo&days=4`)
        }
    }, [userIP])

    const fetchData = async (url)=>{
        const response = await fetch(url)
        if (response.ok){
        const info = await response.json();
        let today =  new Date();
        let hour = today.getHours() -1;
        let cityName = info.location.name;
        let countryHour = parseInt(info.location.localtime.slice(11,13))
        console.log(countryHour);
        let countryName = info.location.country;
        let currentTemp = Math.round(info.current.temp_c)
        let weatherDescription = info.current.condition.text
        let tempA = Math.round(info.forecast.forecastday[0].hour[countryHour +1>= 24?countryHour +1 -24:countryHour +1].temp_c)
        let tempB = Math.round(info.forecast.forecastday[0].hour[countryHour +2>= 24?countryHour +2 -24:countryHour +2].temp_c)
        let tempC = Math.round(info.forecast.forecastday[0].hour[countryHour +3>= 24?countryHour +3 -24:countryHour +3].temp_c)
        let tempD = Math.round(info.forecast.forecastday[0].hour[countryHour +4>= 24?countryHour +4 -24:countryHour +4].temp_c)
        let id = uuidv4()
        let condA = info.forecast.forecastday[0].hour[countryHour +0>= 24?countryHour +0 -24:countryHour +0].condition.text
        let condB = info.forecast.forecastday[0].hour[countryHour +1>= 24?countryHour +1 -24:countryHour +1].condition.text
        let condC = info.forecast.forecastday[0].hour[countryHour +2>= 24?countryHour +2 -24:countryHour +2].condition.text
        let condD = info.forecast.forecastday[0].hour[countryHour +3>= 24?countryHour +3 -24:countryHour +3].condition.text
        // countryHour+1 ||countryHour+2||countryHour+3||countryHour+4 >= 24?1:0
        // let newDayA = countryHour +1>= 24?countryHour +1 -24:countryHour +1
        // let newDayB = countryHour +2>= 24?countryHour +2 -24:countryHour +2
        // let newDayC = countryHour +3>= 24?countryHour +3 -24:countryHour +3
        // let newDayD = countryHour +4>= 24?countryHour +4 -24:countryHour +4
        // let weatherAA = Math.round(info.forecast)
        let isDay = info.current.is_day;
        console.log(isDay);
        console.log("THISSSSSS"+condB);
        let isDayA = info.forecast.forecastday[0].hour[countryHour +0>= 24?countryHour +0 -24:countryHour +0].is_day
        console.log(isDayA);
        let isDayB = info.forecast.forecastday[0].hour[countryHour +1>= 24?countryHour +1 -24:countryHour +1].is_day
        let isDayC = info.forecast.forecastday[0].hour[countryHour +2>= 24?countryHour +2 -24:countryHour +2].is_day
        let isDayD = info.forecast.forecastday[0].hour[countryHour +3>= 24?countryHour +3 -24:countryHour +3].is_day
        let maxTemp = Math.round(info.forecast.forecastday[0].day.maxtemp_c)
        let minTemp =Math.round(info.forecast.forecastday[0].day.mintemp_c)
        let windSpeed = info.forecast.forecastday[0].day.maxwind_kph
        let uv = info.forecast.forecastday[0].day.uv
        let sunRise = info.forecast.forecastday[0].astro.sunrise
        let sunSet = info.forecast.forecastday[0].astro.sunset
        let currentDay = info.current.last_updated.slice(0,10)
        const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d = new Date(currentDay);
        let dayName = weekDays[d.getDay()];
        
         
        
        
        setState([...state,{id,dayName,maxTemp,minTemp,sunRise,sunSet,windSpeed,uv,cityName,countryName,countryHour,currentTemp,weatherDescription,isDay,nextWeather: {weatherA:[isDayA,condA, tempA],weatherB:[isDayB,condB,tempB],weatherC:[isDayC,condC,tempC],weatherD:[isDayD,condD,tempD]}}])
        console.log(info);

        } else {
            console.log('response error no such location');
        }
    }
    const searchCity = (city)=>{
        setSearch([...search,{city}])
        setLink(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${city}&days=4`)
    }

    useEffect(()=>{
        if (link) {
         fetchData(link) 
        }
    },[link])
    

    
    return (<AppContext.Provider value={{state,temp,cond,userCity,showInfo1,toggleInfo1,toggleInfo2,toggleInfo,animateClass, searchCity}}>{children}</AppContext.Provider>)
}

export const useGlobalContext = ()=>{

    return useContext(AppContext);
}

