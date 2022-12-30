import "./index.css";
import { db } from '../../firebase';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";


const Menu = () => {
    const [name, setName] = useState("");
    const [dinner, setDinner] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [breakfast, setBreakfast] = useState([]);
    const [snack, setSnack] = useState([]);

    const addBreakfast = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "breakfast"), {
                name: name,
            });
            alert("Breakfast Menu updated successfully! Please Refresh.");
        } catch (e) {
            alert("Error occured while updating menu, please try again.");
        }
    }

    const addSnack = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "snack"), {
                name: name,
            });
            alert("Snack Menu updated successfully! Please Refresh.");
        } catch (e) {
            alert("Error occured while updating menu, please try again.");
        }
    }

    const addLunch = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "lunch"), {
                name: name,
            });
            alert("Lunch Menu updated successfully! Please Refresh.");
        } catch (e) {
            alert("Error occured while updating menu, please try again.");
        }
    }

    const addDinner = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "dinner"), {
                name: name,
            });
            alert("Dinner Menu updated successfully! Please Refresh.");
        } catch (e) {
            alert("Error occured while updating menu, please try again.");
        }
    }

    const fetchBreakfast = async () => {

        await getDocs(collection(db, "breakfast"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setBreakfast(newData);
                console.log(breakfast, newData);
            })

    }
    const fetchSnack = async () => {

        await getDocs(collection(db, "snack"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setSnack(newData);
                console.log(lunch, newData);
            })

    }
    const fetchLunch = async () => {

        await getDocs(collection(db, "lunch"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setLunch(newData);
                console.log(lunch, newData);
            })

    }

    const fetchDinner = async () => {

        await getDocs(collection(db, "dinner"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setDinner(newData);
                console.log(dinner, newData);
            })

    }
    useEffect(() => {
        fetchBreakfast();
        fetchSnack();
        fetchLunch();
        fetchDinner();
    }, [])


    return (
        <div className="menu-page">
            <h1>This is our Menu!</h1>

            <div className="input">
                <p className="p1">Fill in the text form to expand our menu!</p>
                <input
                    type="text"
                    placeholder="Add to Breakfast?"
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="but" onClick={addBreakfast}>
                    Add!
                </button>
                <br></br>
                <br></br>
                <input
                    type="text"
                    placeholder="Add to Snacks?"
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="but" onClick={addSnack}>
                    Add!
                </button>
                <br></br>
                <br></br>
                <input
                    type="text"
                    placeholder="Add to Lunch?"
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="but" onClick={addLunch}>
                    Add!
                </button>
                <br></br>
                <br></br>
                <input
                    type="text"
                    placeholder="Add to Dinner?"
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="but" onClick={addDinner}>
                    Add!
                </button>
            </div>
            <div className="display">
                <p className="dinner-menu"> <strong>Breakfast Menu:</strong></p>
                {
                    breakfast?.map((name, i) => (
                        <p key={i}>
                            {name.name}
                        </p>
                    ))
                }
                <p className="dinner-menu"> <strong>Lunch Menu:</strong></p>
                {
                    lunch?.map((name, i) => (
                        <p key={i}>
                            {name.name}
                        </p>
                    ))
                }
                <p className="dinner-menu"> <strong>Dinner Menu:</strong></p>
                {
                    dinner?.map((name, i) => (
                        <p key={i}>
                            {name.name}
                        </p>
                    ))
                }
                <p className="dinner-menu"> <strong>Snack Menu:</strong></p>
                {
                    snack?.map((name, i) => (
                        <p key={i}>
                            {name.name}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu