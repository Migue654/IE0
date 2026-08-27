// src/MyApp.jsx
import React from "react";
import Table from "./Table"
import { Tab } from "three/examples/jsm/inspector/ui/Tab.js";
import { useState } from "react";
import { update } from "three/examples/jsm/libs/tween.module.js";



function MyApp() {
    const [characters, setcharacters] = useState( [
        {
            name: "Charlie",
            job:"Janitor"
        },
        {
            name: "Mac",
            job:"Bouncer"
        },
        {
            name: "Dee",
            job:"Aspiring actress"
        },
        {
            name: "Dennis",
            job:"Bartender"
        }
    ])
    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
        return i !== index;
        });

        setcharacters(updated)
    }

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter} />
        </div>
    )
}

export default MyApp;
