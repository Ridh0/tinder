import React from "react";
import "./header.css";
import IconButton from "@mui/material/IconButton";
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from "@mui/icons-material/Person";
function Header() {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header__icon"/>
			</IconButton>

            <IconButton>
                <img alt="" className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon-3.png"/>
            </IconButton>
            <IconButton>
				<ForumIcon fontSize="large" className="header__icon"/>
			</IconButton>
		</div>
	);
}

export default Header;
