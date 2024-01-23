/// <reference types="vite/client" />

type PersonCard = {
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

declare module "remoteApp/PersonCard" { 
    const PersonCard: React.ComponentType; 
    // const PersonCard: PersonCard | null; 
    export default PersonCard; 
} 

type Nullable<GenericType> = null | GenericType;
declare module "remoteApp/store" { 
    const useStore: () => [never, Nullable<PersonCardData>]; 
    export default useStore; 
} 


// универсальное решение, но с плохой типизацией
// declare module "remoteApp/*" { 
//     export default 'hello' as JSX;
// } 