// 複雜的運算 有一個狀態 type 1 2 3
//  1 -> h1
//  2 -> h2
//  3 -> h3

// 原則 : 模板中的邏輯盡量保持精簡
// 複雜得多分支邏輯，收斂為一個函數，通過一個專門的函數來寫分支邏輯，模板只負責調用

const getHtag = function (type) {
	if (type === 1) {
		return <h1>this is h1</h1>;
	}
	if (type === 2) {
		return <h2>this is h2</h2>;
	}
	if (type === 3) {
		return <h3>this is h3</h3>;
	}
};

function App() {
	return (
		<div>
			{getHtag(1)}
			{getHtag(2)}
			{getHtag(3)}
		</div>
	);
}

export default App;
