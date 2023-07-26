import React, { useEffect, useState } from "react";
import Day from "./assets/daytime.jpg";
function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("kathmandu");

  useEffect(() => {
    getData();
  }, [location]);
  const getData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=41d81af7e6744eb47f0e8c4cae418a42`
    );
    const result = await response.json();
    setData(result);
    console.log(result);
  };

  return (
    <div className="bg-blue-500">
      <div className="w-full h-screen ">
        <img src={Day} className="h-[100vh] md:w-full" />

        <div className="flex justify-center items-center ">
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="absolute top-5 border border-spacing-1 border-slate-500 w-[300px] h-[50px] rounded-full ps-3"
            placeholder=" Enter the City "
          />
        </div>
        <div>
          {data.name ? (
            <>
                <div className="absolute top-[220px] left-10 text-white text-5xl font-mono md:text-[100px] md:left-[300px] md:top-[200px]">{data.name}</div>
                <div className="absolute top-[250px] left-10 text-green-200 text-3xl font-block md:text-[60px] md:left-[300px] md:top-[320px]">{data.sys.country}</div>
                </>
          ) : null}
        </div>
        <div>
          {data.main ? (
            <h1 className="text-white absolute top-[100px] text-[80px] font-serif left-10 md:text-[80px] md:left-[300px]">
              {data.main.temp} °C
            </h1>
          ) : null}
        </div>
        <div>
          <div className="flex absolute top-[300px] left-[40px] md:top-[420px] text-center md:left-[300px]">
            <div className="h-[80px] w-[150px] md:h-[100px] md:w-[300px] border  border-red-300 pt-2 rounded-lg">
              <h1 className="text-[30px] md:text-3xl font-senif text-sky-200">
                Humidity
              </h1>
              <div className="text-white text-3xl">
                {/* {data.main.humidity} g/m<sup>3</sup> */}
              </div>
            </div>
            <div className="h-[80px] w-[150px] md:h-[100px] md:w-[300px]  border border-red-300 pt-2 rounded-lg">
              <h1 className="text-3xl font-senif text-white">Rohil</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
