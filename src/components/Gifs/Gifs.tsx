import './Gifs.css';
import { Row, Col } from "react-bootstrap";
import { GifsProps } from "./Gifs.Interface"

function Gifs(props: GifsProps) {

    return (
        <Row>
            {props.data.map((element: any, index: any) => {
                return (
                    <Col xs={12} md={4} lg={4} key={index} >
                        <div className="gif-wrap">
                            <img src={element.images.fixed_height.url} alt="GIPHY GIFs" loading="lazy" />
                        </div>
                    </Col>
                )
            })}
        </Row>
    )
}

export default Gifs;