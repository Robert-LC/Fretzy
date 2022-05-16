import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/esm/Button";
import styles from "../Styles/settings.module.css";

function Settings() {
    return(
        <div>
                <div className="accidental-selector">
                    <input type="radio" className="acc-select" id="flats" name="accidentals" values="flats" defaultChecked></input>
                    <label htmlFor="flats">♭</label>

                    <input type="radio" className="acc-select" id="sharps" name="accidentals" values="sharps"></input>
                    <label htmlFor="sharps">♯</label>
                </div>

                <Dropdown>
                    <Button variant="dark">Instrument</Button>
                    <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1">Guitar</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bass</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
    )
}

export default Settings;