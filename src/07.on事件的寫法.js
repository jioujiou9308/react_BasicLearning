import React from 'react';

// 函數組件的創見和渲染

function Hello() {
	const clickHandler = () => {
		console.log('函數組件中的事件被點擊觸發');
	};
	return <div onClick={clickHandler}>hello</div>;
}
// --------------------------
// 類組建的創見和渲染

class HelloComponent extends React.Component {
	// 1.事件回條函數(標準寫法)，避免this指向其他地方問題
	// 2.這樣寫回調函數中的this指向的是當前的組件實力對象
	// 3.類組件中的事件不用寫const，事件中用this
	clickEvent = () => {
		console.log('類組件中的事件被觸發了');
	};
	render() {
		return <div onClick={this.clickEvent}>this is calss Component</div>;
	}
}

function App() {
	return (
		<div>
			{/* 這這裡渲染hello組件 */}
			<Hello />
			<HelloComponent />
		</div>
	);
}

export default App;
