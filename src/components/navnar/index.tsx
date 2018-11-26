import { Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import React, { Component } from 'react';
import './style.scss';

class AppNavbar extends Component<any, any> {
	render() {
		return (
			<Navbar className="bp3-dark">
				<div className="nav-container">
					<NavbarGroup align={Alignment.LEFT}>
						<NavbarHeading>OoJob</NavbarHeading>
					</NavbarGroup>
					<NavbarGroup align={Alignment.RIGHT}>
						<Button className={Classes.MINIMAL} icon="home" text="Home" />
						<Button className={Classes.MINIMAL} icon="document" text="Jobs" />
						<NavbarDivider />
						<Button className={Classes.MINIMAL} icon="user" />
						<Button className={Classes.MINIMAL} icon="notifications" />
						<Button className={Classes.MINIMAL} icon="cog" />
					</NavbarGroup>
				</div>
			</Navbar>
		);
	}
}

export default AppNavbar;
