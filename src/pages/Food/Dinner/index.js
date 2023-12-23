import "./index.css";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import Decidou from "../../../assets/Images/dinner.png";

export default function Dinner(){
  var food = "";
  const [ran, setRan] = useState([]);

  function randomNum(max, min) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  }
  const fetchRandom = async () => {
    await getDocs(collection(db, "dinner")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(newData);
      const num = newData.length;
      const ranNum = randomNum(num, 0);
      console.log(num);
      console.log(newData.at(ranNum));
      console.log(newData.at(ranNum).name);
      food = newData.at(ranNum).name;
      console.log(food);
      setRan(food);
      console.log(ran);
    });
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <div className="container md:container md:mx-auto text-center">
      <h2> Good evening! You should have </h2>
      <p className="item d-item"> {ran} !</p>
      <div className="flex justify-center items-center">
        <img src={Decidou} alt="decidou" />
      </div>
    </div>
  );
};

