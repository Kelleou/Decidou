import "./index.css";
import { db } from "../../firebase";
import React, { useState, useEffect } from "react";
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
      window.location.reload();
    } catch (e) {
      alert("Error occured while updating menu, please try again.");
    }
  };

  const addSnack = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "snack"), {
        name: name,
      });
      alert("Snack Menu updated successfully! Please Refresh.");
      window.location.reload();
    } catch (e) {
      alert("Error occured while updating menu, please try again.");
    }
  };

  const addLunch = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "lunch"), {
        name: name,
      });
      alert("Lunch Menu updated successfully! Please Refresh.");
      window.location.reload();
    } catch (e) {
      alert("Error occured while updating menu, please try again.");
    }
  };

  const addDinner = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "dinner"), {
        name: name,
      });
      alert("Dinner Menu updated successfully! Please Refresh.");
      window.location.reload();
    } catch (e) {
      alert("Error occured while updating menu, please try again.");
    }
  };

  const fetchBreakfast = async () => {
    await getDocs(collection(db, "breakfast")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBreakfast(newData);
      console.log(breakfast, newData);
    });
  };
  const fetchSnack = async () => {
    await getDocs(collection(db, "snack")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSnack(newData);
      console.log(lunch, newData);
    });
  };
  const fetchLunch = async () => {
    await getDocs(collection(db, "lunch")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLunch(newData);
      console.log(lunch, newData);
    });
  };

  const fetchDinner = async () => {
    await getDocs(collection(db, "dinner")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDinner(newData);
      console.log(dinner, newData);
    });
  };
  useEffect(() => {
    fetchBreakfast();
    fetchSnack();
    fetchLunch();
    fetchDinner();
  }, []);

  return (
    <div className="container md:container md:mx-auto text-center">
      <h1>This is our Menu!</h1>
      <h2>Fill in the text form to expand our menu!</h2>
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
      <div className="grid grid-cols-4 m-5">
        <span className="b-item">
          <p className="menu-label b-item">
            <strong>Breakfast:</strong>
          </p>
          <ul className="menu-items">
            {breakfast?.map((name, i) => (
              <li key={i}>{name.name}</li>
            ))}
          </ul>
        </span>
        <span className="l-item">
        <p className="menu-label l-item">
            <strong>Lunch:</strong>
          </p>
          <ul className="menu-items">
          {lunch?.map((name, i) => (
            <li key={i}>{name.name}</li>
          ))}</ul>
        </span>
        <span className="d-item">
        <p className="menu-label d-item">
            <strong>Dinner:</strong>
          </p>
          <ul className="menu-items">
          {dinner?.map((name, i) => (
            <li key={i}>{name.name}</li>
          ))}
          </ul>
        </span>
        <span className="s-item">
        <p className="menu-label">
            <strong>Snack:</strong>
          </p>
          <ul className="menu-items">
          {snack?.map((name, i) => (
            <li key={i}>{name.name}</li>
          ))}
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Menu;
