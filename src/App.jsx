import React from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import AnimalGallery from "./components/AnimalGallery";
import ColorList from "./components/ColorList";
import WeekDays from "./components/WeekDays";
import GreetingCard from "./components/GreetingCard";
import FamousCities from "./components/FamousCities";
import SeasonColors from "./components/SeasonColors";
import SimpleMenu from "./components/SimpleMenu";

function App() {
  return (
    <div className="wrapper">
      <div className="inWrapper inWrapper1">
        <HelloWorld
          lang1='Inglizcha: "Hello, World!"'
          lang2='Ozbekcha: "Salom, Dunyo!"'
          lang3='Ruscha: "Привет, Мир!"'
          lang4='Yaponcha: "こんにちは、世界！"'
        />
      </div>
      <div className="inWrapper inWrapper2">
        <AnimalGallery
          dog="It 🐶"
          cat="Mushuk 🐱"
          elephant="Fil 🐘"
          lion="Sher 🦁"
          bird="Qush 🐦"
        />
      </div>
      <div className="inWrapper inWrapper3">
        <ColorList
          red="Qizil (red)"
          green="Yashil (green)"
          blue="Ko'k (blue)"
          yellow="Sariq (yellow)"
          maroon="To'q qizil (maroon)"
        />
      </div>
      <div className="inWrapper inWrapper4">
        <WeekDays
          Dushanba="Dushanba"
          Seshanba="Seshanba"
          Chorshanba="Chorshanba"
          Payshanba="Payshanba"
          Juma="Juma"
          Shanba="Shanba"
          Yakshanba="Yakshanba"
        />
      </div>
      <div className="inWrapper inWrapper5">
        <GreetingCard conc="Tug'ilgan kuning bilan! 🎂" />
      </div>
      <div className="inWrapper inWrapper6">
        <FamousCities
          Parij="Parij (Fransiya)"
          Tokio="Tokio (Yaponiya)"
          NyuYork="Nyu-York (AQSH)"
          London="London (Angliya)"
          Toshkent="Toshkent (O'zbekiston)"
        />
      </div>
      <div className="inWrapper inWrapper7">
        <SeasonColors
          Bahor="Bahor (Yashil - green)"
          Yoz="Yoz (Sariq - yellow)"
          Kuz="Kuz (To'q sariq - orange)"
          Qish="Qish (Moviy - lightblue)"
        />
      </div>
      <div className="inWrapper inWrapper8">
        <SimpleMenu
          HomePage="Bosh sahifa"
          About="Biz haqimizda"
          Contacts="Aloqa"
          News="Yangiliklar"
        />
      </div>
    </div>
  );
}

export default App;
