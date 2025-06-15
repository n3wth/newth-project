import { useLocation } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <div className="debug-info">
        <p>Current path: {location.pathname}</p>
        <p>Available routes:</p>
        <ul>
          <li>/</li>
          <li>/weather-vietnam</li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound; 