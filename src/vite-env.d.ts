/// <reference types="vite/client" />

import { Nullable, PersonCardType } from "@global/types";

declare module "remoteApp/PersonCard" { 
    const PersonCard: React.ComponentType; 
    export default PersonCard; 
} 

declare module "remoteApp/store" { 
    const useStore: () => [never, Nullable<PersonCardData>]; 
    export default useStore; 
} 

// универсальное решение, но с плохой типизацией
// declare module "remoteApp/*" { 
//     export default 'hello' as JSX;
// } 