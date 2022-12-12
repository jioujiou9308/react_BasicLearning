import React from 'react';

// 函數組件的創見和渲染
// 函數組件其實不用import React from 'react';
// 創建
function Hello() {
	return <div>hello</div>;
}
// 渲染: <Hello /> or <Hello></Hello>
// --------------------------
// 類組建的創見和渲染
// 使用類組件創建就必須要有 import React from 'react';
// 創建
class HelloComponent extends React.Component {
	render() {
		return <div>this is calss Component</div>;
	}
}
// 渲染
//  <HelloComponent/> or <HelloComponent></HelloComponent>

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
