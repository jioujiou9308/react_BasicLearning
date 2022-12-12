import React from 'react';

// 如何傳遞，自定義參數 => 使用e
// 如果有用到連結，但是我只要其中的參數，不要跳轉(原始行為)，那就使用e.preventDefault

// function Hello() {
// 	const clickHandler = (e) => {
// 		e.preventDefault();
// 		console.log('函數組件中的事件被點擊觸發');
// 	};
// 	return (
// 		<div onClick={clickHandler}>
// 			<a href='https://www.google.com.tw/?hl=zh_TW'>hellow</a>
// 		</div>
// 	);
// }
// ---------------------------------------------------------額外狀況1
// 1.需要一個額外參數傳入到式子 onClick={clickHandler} => onClick={()=>clickHandler("自定義參數")}
// function Hello() {
// 	const clickHandler = (message) => {
// 		console.log('函數組件中的事件被點擊觸發' + message);
// 	};
// 	return <div onClick={() => clickHandler('this is message')}>click me</div>;
// }

// ---------------------------------------------------額外需求2
// 2.既需要e，也需要額外的參數 onClick={clickHandler} => onClick={(e)=>clickHandler(e,"自定義參數")}

// function Hello() {
// 	const clickHandler = (e, message) => {
// 		console.log('函數組件中的事件被點擊觸發', e, message);
// 	};
// 	return <div onClick={(e) => clickHandler(e, 'this is message')}>click me</div>;
// }

// -------------------------這是最一班的情況
function Hello() {
	const clickHandler = (e) => {
		console.log(e);
	};
	return <div onClick={clickHandler}>click me</div>;
}
function App() {
	return (
		<div>
			{/* 這這裡渲染hello組件 */}
			<Hello />
		</div>
	);
}

export default App;
