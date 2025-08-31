import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({name, id}) => {
    return (
        <Card style={{margin:"20px",width:'18rem'}}>
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to={`books/${id}`}><Button style={{float:"right"}} variant="primary">
                    View
                </Button></Link>
            </Card.Footer>
        </Card>
    )
}

export default Item