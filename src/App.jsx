import React from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorlds";
import AnimalGallery from "./components/AnimalsGallery";
import ColorList from "./components/ColorsList";

function App() {
  return (
    <div className="wrapper">
      <div>
        <HelloWorld
          lang1='Inglizcha: "Hello, World!"'
          lang2='Ozbekcha: "Salom, Dunyo!"'
          lang3='Ruscha: "Привет, Мир!"'
          lang4='Yaponcha: "こんにちは、世界！"'
        />
      </div>
      <div>
        <AnimalGallery
          dog="It 🐶"
          cat="Mushuk 🐱"
          elephant="Fil 🐘"
          lion="Sher 🦁"
          bird="Qush 🐦"
        />
      </div>
      <div>
        <ColorList
          red="Qizil (red)"
          green="Yashil (green)"
          blue="Ko'k (blue)"
          yellow="Sariq (yellow)"
          maroon="To'q qizil (maroon)"
        />
      </div>
    </div>
  );
}

export default App;
