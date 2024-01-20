import { IPeopleResult } from '@components/People/types';

const groupedByAgePropertyOrder = ['18-35', '36-50', '51-70', '71+'];
export const convertDataForAgeAndCountStatistic = (data: IPeopleResult[]) => {
    if (!data) {
        return [];
    }
    const getAgeGroup = (age: number) => {
        if (age >= 18 && age <= 35) {
            return '18-35';
        } else if (age >= 36 && age <= 50) {
            return '36-50';
        } else if (age >= 51 && age <= 70) {
            return '51-70';
        } else {
            return '71+';
        }
    };

    const updatedArray = data.map((el) => {
        const ageGroup = getAgeGroup(el.dob.age);
        return {
            gender: el.gender,
            ageGroup,
        };
    });

    const groupedByAge = updatedArray.reduce(
        (acc: { ageGroup: string; male: number; female: number }[], currentItem) => {
            const found = acc.find((item) => item.ageGroup === currentItem.ageGroup);
            if (!found) {
                acc.push({ ageGroup: currentItem?.ageGroup, male: 0, female: 0 });
            }
            return acc;
        },
        [],
    );

    updatedArray.forEach((item) => {
        const found = groupedByAge.find((group) => group.ageGroup === item.ageGroup);
        if (found) {
            item.gender === 'male' ? found.male++ : found.female++;
        }
    });

    return groupedByAge.sort((a, b) => {
        return (
            groupedByAgePropertyOrder.indexOf(a.ageGroup) -
            groupedByAgePropertyOrder.indexOf(b.ageGroup)
        );
    });
};
