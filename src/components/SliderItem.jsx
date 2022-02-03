import { Card, Button } from "react-bootstrap";



export const SliderItem = ({ item, modal , data}) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.by}</Card.Title>
        <Card.Text>
          {item.quote}
        </Card.Text>
        <Button variant="dark" onClick={function(){modal();data();}}>
           View More
        </Button>
      </Card.Body>
    </Card>
  )
}

