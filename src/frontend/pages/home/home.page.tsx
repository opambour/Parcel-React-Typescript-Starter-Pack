import React, { Component } from 'react';

interface IProps {}

interface IState {}

export default class HomePage extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}

	public render() {
		return (
			<>
				<h2>Home Page</h2>
			</>
		);
	}
}
