import React from "react";
import { Featured } from "../components/Featured";
import Slider from "../components/Slider";
import CardItem from "../components/CardItem";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";


class About extends React.Component {
    state = {
        isLoading: false,
        users: [],
        page: 0,
        error:""
    }
    componentDidMount() {
        this.loadUser()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.loadUser()
        }
    }



    loadMore = () => this.setState(prevState => ({ page: prevState.page + 1 }))


    loadUser = async () => {
        try {
            this.setState({ isLoading: true })
            await fetch(`https://randomuser.me/api/?page=${this.state.page}&results=4`)
                .then(res => res.json())
                .then(data =>
                    this.setState((prevState) =>
                        ({ users: [...prevState.users, ...data.results]})));
        }
        catch(err){
            if(err) throw err;
            // if(err) this.setState({error:"Error while loading data. Try again later."})
        }

        finally{
            this.setState({ isLoading: false })
        }
    }

    render() {
        return (
            <>
                <section>
                    <Container>
                        <Row>
                            {this.state.users.map((user, index) => <CardItem key={index} user={user} />)}
                            {/* {this.state.error && <p className="err">{this.state.error}</p>} */}
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <Button
                                    variant="dark"
                                    className="load-more"
                                    onClick={this.loadMore}
                                >{this.state.isLoading ? "Loading..." : "Load More"}</Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default About;