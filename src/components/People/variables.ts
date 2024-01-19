type SortType = {
    title: string;
    field: string;
    // field: "alphabet" | "gender" | "age";
    property: string;
};

export const sortingOptions: SortType[] = [
    {
        title: "алфавиту",
        field: "first",
        property: "name.first",
    },
    {
        title: "полу",
        field: "gender",
        property: "gender",
    },
    {
        title: "возрасту",
        field: "age",
        property: "dob.age",
    },
];