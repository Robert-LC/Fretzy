import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

//Area where the strings can be strummped Up/Down to create chord and note sounds.
function GuitarBody({ currFrets }) {

    return (
        <div className="guitar-body-container">
            <div className="guitar-body">
                <label
                    className="strum-dir-btn"
                    htmlFor="strum-dir">
                    <FaArrowDown />
                    <input
                        id="strum-dir"
                        type="checkbox"
                        name="strum-dir"
                    />
                </label>
                <div className="body-strings">
                    {/*Rewrite this to map over the currentFrets Array */}
                    <div className="body-string" id="body-string-5"></div>
                    <div className="body-string" id="body-string-4"></div>
                    <div className="body-string" id="body-string-3"></div>
                    <div className="body-string" id="body-string-2"></div>
                    <div className="body-string" id="body-string-1"></div>
                    <div className="body-string" id="body-string-0"></div>
                </div>
            </div>
        </div>
    )
}

export default GuitarBody;