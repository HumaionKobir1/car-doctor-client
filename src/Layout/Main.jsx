import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header/Header';
import Footer from '../components/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;