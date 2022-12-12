import React from 'react';
// 組件狀態 類組建作為演示
class TestComponent extends React.Component {
	// 1.定義組件狀態
	state = {
		// 在這裡可以定義各種屬性 全都是當前組件的狀態
		name: 'cp teacher',
	};
	render() {
		return <div>this is TestComponent 當前name 為{this.state.name}</div>;
	}
}

function App() {
	return (
		<div>
			<TestComponent />
		</div>
	);
}

export default App;
