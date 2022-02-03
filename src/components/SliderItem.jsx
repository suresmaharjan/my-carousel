import {Card} from "react-bootstrap";

export const SliderItem=(props)=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.by}</Card.Title>
          <Card.Text>
           {props.quote}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

