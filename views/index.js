import React from 'react';
import ReactDom from 'react-dom';

import './style/index.css';

function App () {
	return (
		<div className="div"> hello react!</div>
	)
}

ReactDom.render(<App />, document.getElementById('root'));
