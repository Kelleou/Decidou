import "./index.css";
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';
import Decidou from '../../../assets/Images/lunch.png';

const Lunch = () => {
  var food = "";
  const [ran, setRan] = useState([]);

  function randomNum(max, min) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
  }
  const fetchRandom = async () => {
    await getDocs(collection(db, "lunch"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
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
      })
  }

  useEffect(() => {
    fetchRandom();
  }, [])

  return (
    <div className="lunch">
      <p> Good afternoon! You should have </p>
      <p className="item"> {ran} !</p>
      <img src={Decidou} className="pic" alt='decidou' />
    </div>
  )

}

export default Lunch