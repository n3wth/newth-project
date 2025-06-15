import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const WeatherVietnam = lazy(() => import('./pages/WeatherVietnam'));
const NotFound = lazy(() => import('./pages/NotFound'));
const HanoiWidget = lazy(() => import('./pages/WeatherVietnam').then(m => ({ default: m.HanoiWidget })));
const HoChiMinhWidget = lazy(() => import('./pages/WeatherVietnam').then(m => ({ default: m.HoChiMinhWidget })));
const HaLongBayWidget = lazy(() => import('./pages/WeatherVietnam').then(m => ({ default: m.HaLongBayWidget })));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather-vietnam" element={<WeatherVietnam />} />
          <Route path="/vietnam/hanoi" element={<HanoiWidget />} />
          <Route path="/vietnam/hochiminh" element={<HoChiMinhWidget />} />
          <Route path="/vietnam/halongbay" element={<HaLongBayWidget />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
