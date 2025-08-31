import { useEffect, useState } from "react";

function Backend() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => {
        console.error("Error fetching data:", err);
        setData("Failed to load data");
      });
  }, []);

  return (
    <div>
      <h1>{data ? data : "Loading..."}</h1>
    </div>
  );
}

export default Backend;
