import { useState, useEffect } from "react";
import { ip, get_ip } from "./Ip_grabber";

function App() {
  const [centralImage, setCentralImage] = useState(
    "https://c.tenor.com/J3IFw6SF46MAAAAC/anime-girl.gif"
  );

  const [display, setDisplay] = useState("display_none");

  const [userIp, setUserIp] = useState("");

  const [message, setMessage] = useState("");

  let audio = new Audio("/nahNahNah.mp3");

  const change_image = () => {
    setTimeout(() => {
      setCentralImage(
        "https://c.tenor.com/gcRsxIU8UQMAAAAd/kanye-west-free-larry-hoover-concert.gif"
      );
      setDisplay("");
      setUserIp(ip[0]);
      setMessage("RIP BOZO... OVO Goons stay winning...");
      audio.play();
    }, 3000);
  };

  useEffect(() => {
    get_ip();
    change_image();
  }, []);
  return (
    <>
      <main>
        <img
          src="https://c.tenor.com/Ynri_0dB-1AAAAAd/skull-reaction-shark-reaction.gif"
          alt="gif"
          className={display}
          id="skeletons"
        />
        <h1 className="ip">{userIp}</h1>
        <h1 className="rip">{message}</h1>
        <img src={centralImage} alt="Image" className="imagem" />
        <img
          src="https://c.tenor.com/Ynri_0dB-1AAAAAd/skull-reaction-shark-reaction.gif"
          alt="gif"
          className={display}
          id="skeletons"
        />
      </main>
    </>
  );
}

export default App;
