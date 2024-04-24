import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Component/Proj2.css'

function Proj2(props) {
  const data=props.data
  console.log(data);
  return (
    <>
    <div className="c">
    {
    data.map((p1)=>(
        <>
            <Card className="a" style={{width:'30rem'}}>
              <Card.Img variant="top" src={p1.img}/>
              <Card.Body>
                  <Card.Title>{p1.name}</Card.Title>
                  <Card.Text>{p1.description} </Card.Text>
                     <Button variant="primary">click here</Button>
              </Card.Body>
            </Card>
            
            </>
    ))
  }

    </div>
  

        </>
  )
}

export default Proj2