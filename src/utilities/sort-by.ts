const enum DIRECTION {
    descending = -1,
    ascending = 1
};

export default function sortBy<T>(array: T[], field: keyof T, direction: DIRECTION = DIRECTION.ascending): T[] {
    return array.sort((a, b) => {
        const fieldA = a[field];
        const fieldB = b[field];

        if (typeof fieldA === 'number') {
            return (fieldA - fieldB) * direction;
        }

        return fieldA.localeCompare(fieldB) * direction;
    });
}