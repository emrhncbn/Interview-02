import "./styles.css";

import { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  // KODUNUZ BURAYA GELECEK
  const[inputValue, setInputValue] = useState("")
  const[robotList, setRobotList] = useState([])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = () => {
    if (inputValue.trim() === "") return; // Boş girişi engelle

    // Aynı isimde robotun listede olup olmadığını kontrol et
    if (robotList.find((robot) => robot === inputValue)) {
      alert("Robot listede bulunmakta!")
      return
    }
    // Yeni robotu listeye ekle
    setRobotList([...robotList, inputValue]);
    setInputValue(""); // Input alanını temizle
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  const handleRemoveRobot = (robot) => {
  //   // Seçilen robotu listeden kaldır
    setRobotList(robotList.filter((item) => item !== robot))
  }

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Generate Robot"
      />
      <button onClick={handleSubmit}>Enter</button>
      <div>
      <h1>Robot List</h1>
      </div>
      <div>
        {robotList.map((robot) => (
          <div key={crypto.randomUUID()} className="robot-item" onClick={() => handleRemoveRobot(robot)}>
            <img src={`https://robohash.org/${robot}`} alt={robot} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default App;
