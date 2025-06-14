import { Routes, Route } from 'react-router-dom';
import WeatherVietnam from './pages/WeatherVietnam';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '20px 0' }}>
      <Routes>
        <Route path="/" element={<WeatherVietnam />} />
        <Route path="/weather-vietnam" element={<WeatherVietnam />} />
      </Routes>
    </div>
  );
}

export default App
