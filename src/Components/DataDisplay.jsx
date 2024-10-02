import React from "react";
import { useEffect, useState } from "react";
// Higher-Order Component to add loading functionality
function withLoading(Component, url) {
  return function WithLoadingComponent(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
      // Simulate data fetching
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        });
      setTimeout(() => setIsLoading(false), 2000);
    }, []);

    return isLoading ? <p>Loading...</p> : <Component data={data} />;
  };
}

function DataDisplay(props) {
  console.log(props);
  
  return (
    <div>
      Data:{" "}
      {props.data.map((da) => (
        <h1 key={da.id}>{da.title}</h1>
      ))}
    </div>
  );
}

const DataDisplayWithLoading = withLoading(
  DataDisplay,
  "https://jsonplaceholder.typicode.com/posts"
);

export default DataDisplayWithLoading;
