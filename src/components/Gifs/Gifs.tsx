import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { GifsProps, ImageInterface } from "./Gifs.Interface"
import ModalShow from '../Modal/ModalShow';
import Image from '../Image/Image';

function Gifs(props: GifsProps) {
    const [modal, openModal] = useState(false);
    const [gifs, setGifs] = useState({});

    const showModal = (images: ImageInterface) => {
        setGifs(images);
        openModal(true);
    }

    return   (
        <Row>
            <ModalShow images={gifs} lgShow={modal} setLgShow={openModal}/>
            {props.data.map((element: any, index: any) => {
                return (
                    <Col xs={12} md={4} lg={4} key={index} >
                        <Image onClick={() => showModal(element.images)} src={element.images.fixed_height.url} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default Gifs;