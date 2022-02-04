import React from "react";
import { Featured } from "../components/Featured";
import Slider from "../components/Slider";
import CardItem from "../components/CardItem";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";


class About extends React.Component {
    state = {
        users: []
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/?page=0&results=8")
            .then(res => res.json())
            .then(data => this.setState({ users: data.results }))
    }

    render() {
        { console.log(this.state.users) }
        return (
            <>
                <section>
                    <Container>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi voluptas voluptate doloribus labore eos, incidunt, rerum adipisci quas enim, sed impedit quasi inventore hic repellat ut alias asperiores fugiat?

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quis fugit officia, ducimus quidem alias eligendi hic aspernatur non quo fuga fugiat molestiae consequatur laudantium, quae suscipit dicta eos dolorum!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident exercitationem earum mollitia ab optio. Fugiat, perspiciatis inventore. Aut porro, quam labore nesciunt laboriosam non repellendus reiciendis placeat suscipit veniam.
                    </Container>
                </section>
                <Container>
                    <Row>
                        {this.state.users.map((user, index) => <CardItem key={index} user={user} />)}
                    </Row>
                </Container>
            </>
        )
    }
}

export default About;