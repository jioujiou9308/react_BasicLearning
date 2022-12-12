//  條件渲染
// 三源表達式  邏輯&&運算

//  1. 三源表達式 - 滿足條件才渲染

function App() {
	const fleg = true;
	return (
		<div>
			{fleg ? (
				<div>
					<span>this is span</span>
				</div>
			) : (
				''
			)}
			{true && <span>this is span 2</span>}
		</div>
	);
}

export default App;
