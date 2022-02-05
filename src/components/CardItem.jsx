import { Card, Col } from "react-bootstrap";

export default function CardItem({user}) {
    const {title , first , last} =user.name;
    return (
        <Col md={3} xs={6} style={{marginBottom:30}}>
            <Card>
                <Card.Img variant="top" src={user.picture.large} />
                <Card.Body>
                    {/* <Card.Title>{user.gender}</Card.Title> */}
                    <Card.Text>
                        <strong>{title}</strong>  {first + " " +  last} <br/>
                        <strong>Age</strong>  {user.registered.age}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}