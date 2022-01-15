import { Routes, Route } from "react-router-dom";
import LoanConfirmation from "screens/LoanConfirmation/LoanConfirmation";
import LoanInformation from "screens/LoanInformation/LoanInformation";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<LoanInformation />} />
			<Route path="/confirmation/:id" element={<LoanConfirmation />} />
		</Routes>
	);
}
