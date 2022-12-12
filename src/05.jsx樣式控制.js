// jsx 樣式控制
// 1. 杭內樣式 - 在元素身上綁訂一個style 屬性即可

// 2. 類名樣式 - 在元素身上綁訂一個className屬性即可

import './App.css';
const style2 = {
	color: 'pink',
	fontSize: '70px',
};
const activeFlag = true;

function App() {
	return (
		<div>
			<span style={{ color: 'red', fontSize: '30px' }}>this is span</span>
			{/* 直接在上方寫好樣式 */}
			<span style={style2}>this is span</span>
			{/* 由css 檔案引入 */}
			<span className='active'>this is span</span>
			{/* 如果想動態控制 active2 滿足條件才新增近來 */}
			<span className={activeFlag ? 'active2' : ''}>測試動態條件active</span>
		</div>
	);
}

export default App;
