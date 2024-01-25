import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { lazy } from 'react';
// @ts-ignore
const PersonCard = lazy(() => import('remoteApp/PersonCard'));

const Person = () => {
    return (
        <ErrorBoundary>
            <PersonCard />
        </ErrorBoundary>
    );
};

export default Person;
