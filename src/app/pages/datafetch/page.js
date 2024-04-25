"use client";
import Container from "@/components/helpers/Container/Container";
import React, { useEffect, useState } from "react";
import axios from "axios";
const DataFetch = () => {
  const [dammydata, setDammydata] = useState(null);
  useEffect(() => {
    AxiosData();
  }, []);

  const AxiosData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setDammydata(result.data);
  };

  return (
    <>
      <div>
        <Container>
          <h1 className="text-center uppercase font-bold text-[100px]">
            Data Fetch on Axios
          </h1>
          {dammydata?.map((item, i) => (
            <div key={i} className="flex justify-between ">
              <div className="w-[23%] border border-solid border-gray-700 py-12 px-5 my-3 rounded-3xl">
                <h3 className="text-[#212529] text-xl font-bold text-center mb-5">
                  {item.name}
                </h3>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.username}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.email}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.street}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.suite}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.city}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.zipcode}
                </p>
                <p className="text-sm text-red-400 font-normal tracking-[1.7] text-center mb-3">
                  {item.address.geo.lat}
                </p>
              </div>
              <div className="w-[23%] border border-solid border-gray-700 py-12 px-5 my-3 rounded-3xl">
                <h3 className="text-[#212529] text-xl font-bold text-center mb-5">
                  {item.name}
                </h3>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.username}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.email}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.street}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.suite}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.city}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.zipcode}
                </p>
                <p className="text-sm text-red-400 font-normal tracking-[1.7] text-center mb-3">
                  {item.address.geo.lat}
                </p>
              </div>
              <div className="w-[23%] border border-solid border-gray-700 py-12 px-5 my-3 rounded-3xl">
                <h3 className="text-[#212529] text-xl font-bold text-center mb-5">
                  {item.name}
                </h3>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.username}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.email}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.street}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.suite}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.city}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.zipcode}
                </p>
                <p className="text-sm text-red-400 font-normal tracking-[1.7] text-center mb-3">
                  {item.address.geo.lat}
                </p>
              </div>
              <div className="w-[23%] border border-solid border-gray-700 py-12 px-5 my-3 rounded-3xl">
                <h3 className="text-[#212529] text-xl font-bold text-center mb-5">
                  {item.name}
                </h3>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.username}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.email}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.street}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.suite}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.city}
                </p>
                <p className="text-sm text-titleGray font-normal tracking-[1.7] text-center mb-3">
                  {item.address.zipcode}
                </p>
                <p className="text-sm text-red-400 font-normal tracking-[1.7] text-center mb-3">
                  {item.address.geo.lat}
                </p>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
};

export default DataFetch;
