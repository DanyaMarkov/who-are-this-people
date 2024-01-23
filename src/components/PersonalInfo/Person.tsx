import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import PersonCard from 'remoteApp/PersonCard';

const Person = () => {
    return (
        <ErrorBoundary>
            <PersonCard />
        </ErrorBoundary>
    );
};

export default Person;
