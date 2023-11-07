import React from "react";
import { Link } from "react-router-dom";
import "../CSS/display.css";
import { useState, useEffect } from "react";

const Display = ({ Heading, Data }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data != [])
      fetch("http://localhost:5000/")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw response;
          }
        })
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  var Description = "UwU";
  var Position = "Awooga";
  return (
    <>
      <Link to={"/sign-up"}>Hi</Link>
      <div id="titleholder">
        <h1 id="title" className="text-3xl md:text-5xl">
          {Heading}
        </h1>
      </div>
      <div className="flex px-[10%] flex-wrap pt-[5%]">
        {data.map((item) => (
          <div className="shadow-md rounded-lg w-80 py-2 mx-10  mb-[10vh] bg-[#444444] ">
            <div v-if="Link" className=" h-full">
              <a
                href={
                  "https://tahsin2020.github.io/Portfolio/img/Earth.cbc5b5e6.png"
                }
              >
                <img
                  src="https://tahsin2020.github.io/Portfolio/img/Earth.cbc5b5e6.png"
                  className="max-h-40 mx-auto"
                />
              </a>
              <h2 className="mt-4 text-white text-center"> {Description} </h2>
              <br />
              <h3 className="mt-4 text-slate-300 text-center mt-auto">
                {" "}
                {Position}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
