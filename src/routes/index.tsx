import { Routes, Route } from "react-router-dom";
import LoanConfirmation from "screens/LoanConfirmation";
import LoanInformation from "screens/LoanInformation";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<LoanInformation />} />
			<Route path="confirmation" element={<LoanConfirmation />} />
		</Routes>
	);
}
