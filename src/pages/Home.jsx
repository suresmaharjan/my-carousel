import {Featured} from "../components/Featured";
import Slider from "../components/Slider";
import { Col } from "react-bootstrap";

const Home=()=>{
    return(
        <>
            <Featured />
            <Col>
                <Slider />
            </Col>
        </>
    )
}

export default Home;