import { Link } from "react-router-dom";
import "../CSS/display.css";
import { useState, useEffect } from "react";
import { getUserItems } from "../helpers/api-communicator";
import toast from "react-hot-toast";

type Props = { Heading: String; Data: String; Type: String };
type Item = {
  username: { type: String };
  type: { type: String };
  name: { type: String };
  description: { type: String };
  link: { type: String };
  technologies: { type: String };
  completion_date: { type: Date };
  recruitment_end_date: { type: Date };
  title: { type: String };
  role: { type: String };
};

const Display = ({ Heading, Data, Type }: Props) => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    getUserItems()
      .then((data) => {
        setData([...data.items]);
        toast.success("Successfully loaded chats", { id: "loadchats" });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Loading Failed", { id: "loadchats" });
      });
  }, []);

  var Description = "UwU";
  var Position = "Awooga";
  return (
    <>
      {data.length == 0 ? (
        <div></div>
      ) : (
        <>
          <div id="titleholder">
            <h1 id="title" className="text-3xl md:text-5xl">
              {Heading}
            </h1>
          </div>
          <div className="flex px-[10%] flex-wrap pt-[5%]">
            {data.map((item, key) => (
              <div
                className="shadow-md rounded-lg w-80 py-2 mx-10  mb-[10vh] bg-[#444444] "
                key={key}
              >
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
                  <h2 className="mt-4 text-white text-center">{Description}</h2>
                  <br />
                  <h3 className="mt-4 text-slate-300 text-center mt-auto">
                    {Position}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Display;
