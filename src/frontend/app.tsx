import React, { Component } from 'react';
import LoadableExport from 'react-loadable';
import { Switch, Route } from 'react-router-dom';

// includes component
import { Includes } from '../frontend/pages/includes/index';

const Loading = (props: any) => {
	if (props.error) {
		return (
			<div>
				Error! <button onClick={props.retry}>Retry</button>
			</div>
		);
	} else if (props.pastDelay) {
		return <div>Loading...</div>;
	} else {
		return null;
	}
};

// code splitting with react-loadbale
const HomePage = LoadableExport({
	loader: () => import('./pages/home/home.page'),
	loading: Loading
});

export default class App extends Component<{}, {}> {
	public render() {
		return (
			<>
				<Includes.Header />

				<Includes.Content>
					<Switch>
						<Route path="/" component={HomePage} exact={true} />
					</Switch>
				</Includes.Content>

				<Includes.Footer />
			</>
		);
	}
}
