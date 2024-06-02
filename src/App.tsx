import "./App.css";

import {Search} from "./kiosk/Search.tsx";
import data from "./data.json";
import {FastenerList} from "./kiosk/FastenerList.tsx";
import {OtherOptionsList} from "./kiosk/OtherOptionsList.tsx";

function App() {
	return (
		<>
			<div className="w-2/3 m-2 py-1 mr-6">
				<h1 className="text-[#4fb94d] text-3xl font-black text-left">
					SBHX Fastner Kiosk
				</h1>
				<Search />
			</div>
			<div className="flex">
				<div className="w-2/3 border border-solid border-[#4fb94d] m-2 rounded py-1">
					<FastenerList />
				</div>
				<div className="w-1/3 border border-solid border-[#4fb94d] m-2 rounded py-1">
					<OtherOptionsList />
				</div>
			</div>
		</>
	);
}

export default App;
