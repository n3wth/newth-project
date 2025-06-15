import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WeatherVietnam, { HanoiWidget, HoChiMinhWidget, HaLongBayWidget } from './pages/WeatherVietnam';
import VietnamFlights from './pages/VietnamFlights';
import VietnamMap from './pages/VietnamMap';
import VietnamItinerary from './pages/VietnamItinerary';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather-vietnam" element={<WeatherVietnam />} />
        <Route path="/vietnam/flights" element={<VietnamFlights />} />
        <Route path="/vietnam/map" element={<VietnamMap />} />
        <Route path="/vietnam/itinerary" element={<VietnamItinerary />} />
        <Route path="/vietnam/hanoi" element={<HanoiWidget />} />
        <Route path="/vietnam/hochiminh" element={<HoChiMinhWidget />} />
        <Route path="/vietnam/halongbay" element={<HaLongBayWidget />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
