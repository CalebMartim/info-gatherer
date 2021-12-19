import { send_data } from "./Firebase";
export const ip = [];

let api_key = "db4dbab3775b48e0b19eaa83397f89bb";

export const get_ip = () => {
  const getJSON = async (url) => {
    const response = await fetch(url);

    const data = response.json();
    return data;
  };

  console.log("RIP BOZO OVO GOONS STAY WINNING");

  getJSON(`https://ipgeolocation.abstractapi.com/v1/?api_key=${api_key}`).then(
    (data) => {
      data.dateCreated = Date.now();
      ip.push(data.ip_address);
      send_data(data);
    }
  );
};
