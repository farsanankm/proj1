import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project1(props) {
   const data = props.data
   console.log(data);
    return (
        <>

{
          data.map((p) => (
                <>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={p.img} />
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </>
            ))
        }



        </>
   
       

     )
}

export default Project1;