import Footer from '../Footer/Footer'
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';


const Home = () => {
    return ( <Layout >
        <About / >
        <Technologies / >
        <Projects / >
            <Footer />
        </Layout>
    );
};

export default Home;