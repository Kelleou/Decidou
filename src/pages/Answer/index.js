import "./index.css";
import { db } from '../../firebase';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import Decidou from '../../assets/Images/book.png';
import Book from '../../assets/Images/answer.png';

export default function Answer(){
    const [answer, setAnswer] = useState("");
    const [clicked, setClicked] = useState(false);
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

    function handleClick(){
        setClicked(true);
    }
    return (
        <div className="container md:container md:mx-auto text-center">

            <div className="input-quote">
                <h2>Fill in the text form to add to our Answer Book!</h2>
                <input
                    type="text"
                    placeholder="Enter your quote here to add to the book..."
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button type="submit" className="but" onClick={addAnswer}>
                    Add!
                </button>
            </div>
            <div className="flex justify-center book">
                {clicked ? <><img src={Decidou} className="open-img " alt='decidou' />
                <h1 className="quote">{ran}</h1> </>:<button onClick={handleClick}><img src={Book} className="closed-img" alt='book' />
                <h1 className="click">Click me for an answer</h1></button>}
            </div>
        </div>
    )
}
