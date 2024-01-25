export type Nullable<GenericType> = GenericType | null; 

export type PersonCardType = {
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