import style from './PersonItem.module.scss';
import { PersonItemProps } from './types';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PersonItem = motion(
    forwardRef(({ personInfo }: PersonItemProps, ref: ForwardedRef<HTMLLIElement>) => {
        return (
            <li
                ref={ref}
                className={cn(style.person, {
                    [style.male]: personInfo.gender === 'male',
                    [style.female]: personInfo.gender === 'female',
                })}>
                <div className={style.mainPersonInfo}>
                    <LazyLoadImage
                        src={personInfo.picture.medium}
                        width={72}
                        height={72}
                        placeholderSrc={personInfo.picture.thumbnail}
                        alt={`фото пользователя ${personInfo.name.first}`}
                        effect="blur"
                    />

                    <span>{personInfo.name.first}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{personInfo.dob.age}</div>
                    {/* <div>{personInfo.gender}</div> */}
                </div>
            </li>
        );
    }),
);

export default PersonItem;
