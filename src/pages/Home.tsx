import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Weather Widgets</h1>
      <ul className="space-y-6">
        <li className="bg-card/80 border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Vietnam 10-Day Weather Forecast</h2>
          <p className="mb-2 text-muted-foreground">A beautiful 10-day weather forecast widget for three major Vietnamese cities: Hanoi, Ho Chi Minh City, and Ha Long Bay.</p>
          <Link to="/weather-vietnam" className="text-primary underline">/weather-vietnam</Link>
        </li>
        <li className="bg-card/80 border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Hanoi Weather Widget</h2>
          <p className="mb-2 text-muted-foreground">Embeddable widget for Hanoi's 10-day forecast.</p>
          <Link to="/vietnam/hanoi" className="text-primary underline">/vietnam/hanoi</Link>
        </li>
        <li className="bg-card/80 border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Ho Chi Minh City Weather Widget</h2>
          <p className="mb-2 text-muted-foreground">Embeddable widget for Ho Chi Minh City's 10-day forecast.</p>
          <Link to="/vietnam/hochiminh" className="text-primary underline">/vietnam/hochiminh</Link>
        </li>
        <li className="bg-card/80 border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Ha Long Bay Weather Widget</h2>
          <p className="mb-2 text-muted-foreground">Embeddable widget for Ha Long Bay's 10-day forecast.</p>
          <Link to="/vietnam/halongbay" className="text-primary underline">/vietnam/halongbay</Link>
        </li>
      </ul>
    </div>
  );
} 