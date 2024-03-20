import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    // এটার মাধমে বুঝা যায় ডাটা লোড হচ্ছে 😂
    const navigation = useNavigation()

    // ফাইল পাথ বুঝা যায় যে কোন জায়গাতে আছি
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? 
                <p>Loading...</p> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;