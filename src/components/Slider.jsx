import { useRef, useState } from "react";
import "./slider.scss";
import { GrPrevious, GrNext } from "react-icons/gr";

const Slider = () => {
    const [index , setIndex]=useState(0);
    const slider = useRef("");

    const handleClick = (direction) => {
        let position = slider.current.getBoundingClientRect().x - 130;
       
        if(direction === "left" && index > 0){
            setIndex(prevIndex => prevIndex - 1)
            slider.current.style.transform = `translateX(${300 + position}px)`;
        }

        if(direction === "right" && index < 5){
            setIndex(prevIndex => prevIndex + 1)
            slider.current.style.transform = `translateX(${-300 + position}px)`;
        }
        console.log(index)
    }

    return (
        <div className="slider">
            <ul ref={slider}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li> 
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul>
            { index > 0 && <GrPrevious className="prev icon" onClick={() => handleClick("left")} /> }
            { index < 5 &&  <GrNext className="next icon" onClick={() => handleClick("right")} /> }
               
        </div>
    )
}

export default Slider;