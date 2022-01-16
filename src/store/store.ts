import create from "zustand";
import { persist } from "zustand/middleware";

export type OfferIdProps = {
	offerId: string;
	setOfferId: (id: string) => void;
};

export const useStore = create<OfferIdProps>(
	persist(
		(set) => ({
			offerId: "",
			setOfferId: (id: string) => set({ offerId: id })
		}),
		{
			name: "offerId"
		}
	)
);
