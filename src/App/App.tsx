import GeneratePanel from '@components/GeneratePanel/GeneratePanel';
import Header from '@components/Header/Header';
import People from '@components/People/People';
import Person from '@components/PersonalInfo/Person';
import Statistic from '@components/Statistic/Statistic';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="layout">
                <div className="panel">
                    <GeneratePanel />
                </div>
                <div className="people">
                    <People />
                </div>
                <div className="person">
                    <Person />
                </div>
                <div className="statistic">
                    <Statistic />
                </div>
            </main>
        </div>
    );
};

export default App;
