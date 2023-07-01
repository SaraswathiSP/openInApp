import LeftSection from "../LeftSection"
import Header from "../Header"
import './index.css'
import Cards from "../Cards"
import Charts from "../Charts"
import  LineChart1  from '../LineChart1'



const Home = () =>{
    return (
        <div className="home-container">
           
            <LeftSection/>
           
        <div className="right-section">
            <Header/>
            <Cards/>
            <LineChart1/>
            <Charts/>
        </div>
        </div>
    )
}

export default Home