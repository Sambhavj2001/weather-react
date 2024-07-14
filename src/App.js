import Input from './components/Input';
import Card from './components/Card';
import Button from './components/Button';
import './App.css';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {
  const weather = useWeather();

  useEffect(()=>{
    weather.fetchCurrentUserLocationData();
  },[]);
  
  return (
    <div className='App'>
        <h1>Weather ForeCast</h1>
        <Input/>
        <Button onClick={weather.fetchData} value="Search"/>
        <Card/>
        <Button value="Refresh"/>
    </div>
  );
}

export default App;
