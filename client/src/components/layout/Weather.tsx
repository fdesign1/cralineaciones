import * as React from 'react';

interface WeatherData {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
  wind_kph: number;
  precip_mm: number;
}

export function WeatherWidget() {
  const [weather, setWeather] = React.useState<WeatherData | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    
    const fetchWeather = async () => {
      try {
        // Usar variable de entorno para la API key
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        if (!apiKey) {
          throw new Error('Weather API key not configured');
        }
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent("Bahia Blanca")}&aqi=no&lang=es`);
        const data = await response.json();
        setWeather(data.current);
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="text-gray-300 text-sm">Cargando clima...</div>;
  if (!weather) return null;

  return (
    <div className="flex items-center gap-2 text-gray-300 text-m">
      <img 
        src={weather.condition.icon} 
        alt={weather.condition.text}
        className="w-10 h-10"
      />
      <span>{Math.round(weather.temp_c)}°C</span>
      <span>•</span>
      <span>{weather.condition.text}</span>
      {weather.wind_kph > 20 && (
        <>
          <span>•</span>
          <span>💨 {Math.round(weather.wind_kph)} km/h</span>
        </>
      )}
      {weather.precip_mm > 0 && (
        <>
          <span>•</span>
          <span>🌧️ {weather.precip_mm}mm</span>
        </>
      )}
    </div>
  );
}