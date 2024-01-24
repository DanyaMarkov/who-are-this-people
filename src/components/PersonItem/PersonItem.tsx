import style from './PersonItem.module.scss';
import { PersonItemProps } from './types';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useStore from 'remoteApp/store';

const PersonItem = motion(
    forwardRef(({ personInfo }: PersonItemProps, ref: ForwardedRef<HTMLLIElement>) => {
        const [, setPersonCard] = useStore();

        return (
            <li
                ref={ref}
                className={cn(style.person, {
                    [style.male]: personInfo.gender === 'male',
                    [style.female]: personInfo.gender === 'female',
                })}
                onClick={() =>
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
                    })
                }>
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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{personInfo.dob.age}</div>
                </div>
            </li>
        );
    }),
);

export default PersonItem;
