import '../assets/font/Rimouski.css';
import '../assets/style.css';

const HavaDurumu = ({weather}) => {
   
    if(!weather){
        return <p>Yükleniyor...</p>
    }
return(
    <div>
        
        {/* <h3>{weather.name}</h3>
        <h4>{weather.weather.map(data => data.description).join(", ")}</h4>
        <p>{weather.main.temp} °C </p>
        <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p> */}
        <div className="container">
            <div className="app-title">
                <p>Hava Durumu</p>
            </div>
            <div className="notification"></div>
            <div className="weather-container">
                <div className="weather-icon">
                    <img src={require(`./../assets/icons/${weather.weather[0].icon}.png`).default} />
                </div>
                <div className="temperature-value">
                    <p>{Math.round(weather.main.temp)} °<span>C</span></p>
                </div>
                <div className="temperature-description">
                    <p>{weather.weather[0].description}</p>
                </div>
                <div className="location">
                    <p>{weather.name}</p>
                </div>
              
            </div>
        </div>
    </div>
)

}
export default HavaDurumu;