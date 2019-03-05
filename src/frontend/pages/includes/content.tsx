import React from 'react';

interface IProps {
	children: React.ReactNode;
}

export default (props: IProps) => {
	return (
		<>
			<main className="container">{props.children}</main>
		</>
	);
};
