import { Spinner } from 'react-bootstrap';

function Loader() {
    return (
        <div className="d-flex justify-content-center m-5 pt-5">
            <Spinner animation="border" role="status" >
                <span className="visually-hidden">Loading...</span>
            </Spinner >
        </div>
    )
}

export default Loader;