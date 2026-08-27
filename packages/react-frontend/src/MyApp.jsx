// src/MyApp.jsx
import React from "react";
import Table from "./Table"
import { Tab } from "three/examples/jsm/inspector/ui/Tab.js";
import { useState } from "react";
import { update } from "three/examples/jsm/libs/tween.module.js";

import Form from "./Form"



function MyApp() {
    const [characters, setcharacters] = useState( [])
    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
        return i !== index;
        });

        setcharacters(updated)
    }

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter} />
            <Form/>
        </div>
    )
}

export default MyApp;
