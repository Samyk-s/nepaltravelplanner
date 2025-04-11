import CurrencyExchange from "@/component/currencyexchange/currencyexchange";
import WeatherBox from "@/component/weather/weather";
import ClientMapWrapper from "@/component/map/ClientMapWrapper"; // <-- Import the new wrapper

export default function TravelToolkitPage() {
  return (
    <div className="w-full p-4 space-y-6 mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CurrencyExchange />
        <WeatherBox />
      </div>
      <ClientMapWrapper />
    </div>
  );
}
