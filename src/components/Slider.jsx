import { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { SliderItem } from "./SliderItem";
import data from "../data.json";
import "./slider.scss";
import { GrPrevious, GrNext } from "react-icons/gr";



const Slider = () => {
    const [index, setIndex] = useState(0);
    const slider = useRef("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [val , setVal]  =useState({});
    const ModalBox=()=>{
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{textTransform:"uppercase"}}>Quote of the day</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{val.quote}</Modal.Body>
                    <Modal.Footer> - {val.by}</Modal.Footer>
                </Modal>
    
            </>
    
        )
    }

    const handleClick = (direction) => {
        let position = slider.current.getBoundingClientRect().x - 130;

        if (direction === "left" && index > 0) {
            setIndex(prevIndex => prevIndex - 1)
            slider.current.style.transform = `translateX(${300 + position}px)`;
        }

        if (direction === "right" && index < 5) {
            setIndex(prevIndex => prevIndex + 1)
            slider.current.style.transform = `translateX(${-300 + position}px)`;
        }
    }

    return (
        <>
            <section className="slider">
                <div className="container">
                    <div ref={slider} className="wrapper">
                        {data.map((item, index) =>
                            <SliderItem
                                key={index}
                                item={item}
                                modal={handleShow}
                                data={()=>setVal(item)}
                                
                            />
                        )}
                    </div>
                    {index > 0 && <GrPrevious className="prev icon" onClick={() => handleClick("left")} />}
                    {index < 5 && <GrNext className="next icon" onClick={() => handleClick("right")} />}
                </div>
            </section>
            <ModalBox />
        </>
    )
}

export default Slider;