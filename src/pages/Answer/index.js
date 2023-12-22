import "./index.css";
import { db } from '../../firebase';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import Decidou from '../../assets/Images/book.png';

const Answer = () => {
    const [answer, setAnswer] = useState("");
    var quote = "";
    const [ran, setRan] = useState([]);

    function randomNum(max, min) {
        const r = Math.random() * (max - min) + min
        return Math.floor(r)
    }

    const addAnswer = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "answers"), {
                quote: answer,
            });
            alert("Answer added to our book!");
        } catch (e) {
            alert("Error occured while updating book, please try again.");
        }
    }

    const fetchRandom = async () => {
        await getDocs(collection(db, "answers"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                console.log(newData);
                const num = newData.length;
                const ranNum = randomNum(0, num);
                console.log(num);
                console.log(newData.at(ranNum));
                console.log(newData.at(ranNum).quote);
                quote = newData.at(ranNum).quote;
                console.log(quote);
                setRan(quote);
                console.log(ran);
            })
    }

    useEffect(() => {
        fetchRandom();
    }, [])


    return (
        <div className="answer-page">

            <div className="input-quote">
                <p className="p1">Fill in the text form to add to our Answer Book!</p>
                <input
                    type="text"
                    placeholder="Add to Book?"
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button type="submit" className="but" onClick={addAnswer}>
                    Add!
                </button>
            </div>
            <div class="book">
                <img src={Decidou} className="book" alt='decidou' />
                <h1 className="quote">{ran}</h1>
            </div>
        </div>
    )
}

export default Answer