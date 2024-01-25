import style from './PersonItem.module.scss';
import { PersonItemProps } from './types';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { Nullable, PersonCardType } from '@global/types';
var useStore: () => [PersonCardType, Nullable<PersonCardType>];

// @ts-ignore
import('remoteApp/store').then((useStoreHook) => {
    useStore = useStoreHook.default;
});

const PersonItem = motion(
    forwardRef(({ personInfo }: PersonItemProps, ref: ForwardedRef<HTMLLIElement>) => {
        if (!useStore) {
            return null;
        }
        const [person, setPersonCard] = useStore();

        const handleChoosePersonCard = () => {
            // @ts-ignore
            setPersonCard({
                picture: personInfo.picture.large,
                firstName: personInfo.name.first,
                lastName: personInfo.name.last,
                dobDate: personInfo.dob.date.split('T')[0],
                age: personInfo.dob.age,
                gender: personInfo.gender,
                country: personInfo.location.country,
                city: personInfo.location.city,
                phone: personInfo.phone,
                email: personInfo.email,
            });
        };

        return (
            <ErrorBoundary>
                <li
                    ref={ref}
                    className={cn(style.person, {
                        [style.male]: personInfo.gender === 'male',
                        [style.female]: personInfo.gender === 'female',
                        [style.active]: personInfo.name.first === person?.firstName,
                    })}
                    onClick={handleChoosePersonCard}>
                    <div className={style.mainPersonInfo}>
                        <LazyLoadImage
                            src={personInfo.picture.medium}
                            width={72}
                            height={72}
                            placeholderSrc={personInfo.picture.thumbnail}
                            alt={`фото пользователя ${personInfo.name.first}`}
                            effect="blur"
                        />
                        <span className={style.name}>{personInfo.name.first}</span>
                    </div>
                    <div className={style.age}>
                        <div>{personInfo.dob.age}</div>
                    </div>
                </li>
            </ErrorBoundary>
        );
    }),
);

export default PersonItem;
