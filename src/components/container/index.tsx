import React, { Component } from 'react';
import styles from './style.scss';

class Container extends Component<any, any> {
	render() {
		return <div className={styles.container}>{this.props.children}</div>;
	}
}

export default Container;
