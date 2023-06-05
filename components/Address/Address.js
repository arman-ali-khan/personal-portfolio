import axios from "axios";
import { useEffect, useState } from "react";

const Address = () => {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    axios
      .get(`/address.json`)
      .then((res) => {
        setAddress(res.data);
      });
  }, []);
  console.log(address);
  return (
    <div className="w-full border h-full rounded-lg p-4">
      <div className="my-3">
        <h1 className="text-xl font-gumela font-bold  py-2">Address</h1>
      </div>
      <div className="flex flex-col gap-3">
       {
        address.map(item=>
          <div key={item.id}>
          <a
            href={item.url}
            className="flex justify-between items-center"
            target="_blank"
          >
            <p className="flex items-center gap-2 font-bold">
              <span className="text-xl">
               <img src={item.icon} className="w-6 h-6 object-cover" alt="" />
              </span>
              {item.title}
            </p>
            <p>{item.option}</p>
          </a>
        </div>
        )
       }
      </div>
    </div>
  );
};

export default Address;
