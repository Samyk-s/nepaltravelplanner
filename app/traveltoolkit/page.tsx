import CurrencyExchange from "@/component/currencyexchange/currencyexchange";
import MyMaps from "@/component/map/map";
import WeatherBox from "@/component/weather/weather";

export default function TravelToolkitPage() {
  return (
    <>
     <div className="w-full p-4 space-y-6 mt-24"> {/* 100px margin-top */}
  {/* Grid layout for Currency Exchange & Weather */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <CurrencyExchange />
    <WeatherBox />
  </div>
  <MyMaps />
  
</div>

    </>
  );
}
