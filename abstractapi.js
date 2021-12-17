const fetch = require("node-fetch");

get_ip = () => {
  let api_key = "db4dbab3775b48e0b19eaa83397f89bb";

  console.log(api_key);
  const getJSON = async (url) => {
    const response = await fetch(url);

    const data = response.json();
    return data;
  };
  console.log("Fetching data...");

  getJSON(`https://ipgeolocation.abstractapi.com/v1/?api_key=${api_key}`).then(
    (data) => {
      console.log(data.ip_address);
      console.log(data.country);
      console.log(data);
    }
  );
};

module.exports = { get_ip };
