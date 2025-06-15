import { Routes, Route } from 'react-router-dom';
import WeatherVietnam from './pages/WeatherVietnam';

function App() {
  console.log('App component rendered, current path:', window.location.pathname);
  
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '20px 0' }}>
      <Routes>
        <Route path="/" element={<WeatherVietnam />} />
        <Route path="/weather-vietnam" element={<WeatherVietnam />} />
        <Route path="*" element={
          <div style={{ textAlign: 'center', padding: '50px', color: '#333' }}>
            <h2>Route Debug Info</h2>
            <p>Current path: {window.location.pathname}</p>
            <p>Current URL: {window.location.href}</p>
            <p>Available routes: /, /weather-vietnam</p>
            <WeatherVietnam />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App
