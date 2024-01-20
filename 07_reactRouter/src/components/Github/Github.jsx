import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/rohitsirsat")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-white bg-slate-600 text-3xl p4 text-center flex items-center  justify-around">
      <img src={data.avatar_url} alt="github photo" width={300} />
      Github Followers: {data.following}
    </div>
  );
}

export default Github;

export const githiubInfo = async () => {
  const response = await fetch("https://api.github.com/users/rohitsirsat");
  return response.json();
};
