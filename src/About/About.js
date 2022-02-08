import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const About = () => {
const [value, setValue] = React.useState(0);

const [myList, setMyList] = useState([
	"999XXXXXXX",
	"8575XXXXXX",
	"99XXXXXXXX",
    "977XXXXXXX"
]);

const handleChange = (event, newValue) => {
	if (newValue == 0) {
	setMyList(["9773869980", "9773869981", "9773869982", "9773869983"]);
	setValue(0);
	} else {
	setMyList(["Contact One", "Contact Two", "Contact Three", "Contact Four"]);
	setValue(1);
	}
};

return (
	<div
	style={{
        alignContent:'center',
		alignSelf:'center',
        
	}}
	>
	<h2>
		Contacts List?
	</h2>
	<Paper
		square
		style={{
		flexGrow: 1,
		maxWidth: 500,
        alignSelf:'center'
		}}
	>
		<Tabs
		value={value}
		onChange={handleChange}
		variant="fullWidth"
		indicatorColor="primary"
		textColor="primary"
		aria-label="icon tabs example"
		>
		<Tab icon={<PhoneIcon />} aria-label="phone" />
		<Tab icon={<PersonPinIcon />} aria-label="person" />
		</Tabs>
		<ul>
		<li>{myList[0]}</li>
		<li>{myList[1]}</li>
		<li>{myList[2]}</li>
        <li>{myList[3]}</li>
		</ul>
	</Paper>
	</div>
);
};

export default About;
