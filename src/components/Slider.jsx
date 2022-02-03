import { useRef, useState } from "react";
import { SliderItem } from "./SliderItem";
import data from "../data.json";
import "./slider.scss";
import { GrPrevious, GrNext } from "react-icons/gr";

const Slider = () => {
    const [index, setIndex] = useState(0);
    const slider = useRef("");

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
        console.log(index)
    }

    return (
        <section className="slider">
            <div className="container">
                    <div ref={slider} className="wrapper">
                        {data.map(item => <SliderItem by={item.by} quote={item.quote} />)}
                    </div>
                    {index > 0 && <GrPrevious className="prev icon" onClick={() => handleClick("left")} />}
                    {index < 5 && <GrNext className="next icon" onClick={() => handleClick("right")} />}
            </div>
        </section>
    )
}

export default Slider;