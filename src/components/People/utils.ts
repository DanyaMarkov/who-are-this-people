export function getNestedFieldValueByFieldsArray<EntityType>(
    chainToNestedField: string[],
    tableEntityItem: EntityType,
    rootFieldInConfig: keyof EntityType,
) {
    const result = chainToNestedField.reduce(
        (nestedFieldValue, currentNestedFieldName) =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            nestedFieldValue?.[currentNestedFieldName as keyof typeof nestedFieldValue],
        chainToNestedField[0] === rootFieldInConfig
            ? tableEntityItem
            : tableEntityItem[rootFieldInConfig],
    );
    var qq = 1;
    console.log(qq);

    return result;
}

export const getObjectValueByPath = <EntityType>(path: string, object: EntityType) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return path.split('.').reduce((obj, item) => obj[item], object);
};
