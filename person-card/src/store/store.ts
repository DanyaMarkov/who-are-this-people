import { Nullable } from './../global/types';
import { atom, useAtom } from "jotai";

type PersonCardData = {
    picture: string;

    firstName: string;
    lastName: string;

    dobDate: number;
    age: number;
    gender: string;

    country: string;
    city: string;
    phone: string;
    email: string;
}

const currentPersonCardData = atom(null);

const usePersonCard = () => useAtom<Nullable<PersonCardData>>(currentPersonCardData);

export default usePersonCard;