import "./index.css";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, FieldPath } from "firebase/firestore";
import { db } from '../../../firebase';

const Dinner = () => {
  var food = "";
  const [ran, setRan] = useState([]);

  function randomNum(max, min){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}
  const fetchRandom = async () => {
    await getDocs(collection(db, "dinner"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                console.log(newData);
                const num = newData.length;
                const ranNum = randomNum(0, num);
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
    <div>{ran}</div>
  )
  
}

export default Dinner
