import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = props => {
    const history = useHistory();
    const returnHome = () => {
        histpory.push('/')
    }
    return (
        <div>
            <h1 onClick={()=> returnHome()}>Home</h1>
        </div>
    )
}
export default Header;