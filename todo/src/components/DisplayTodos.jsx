import React from 'react'
import { Container,Row,Col,Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useState } from 'react'
function DisplayTodos() {
    const [todos,setTodos]=useState([
        {
        title:"first",
        description:"play"
      },
      {
        title:"second",
        description:"Learn"
      }
])
  return (
    <Container>
        <Row>
            <Col>
            <Card className="shadow-sm">
                <Card.Body>
                    <h3>All card are here</h3>
                    <ListGroup>
                        {
                        todos.map((todo,index)=>(
                            <ListGroupItem key={index}>
                                <h4>{todo.title}</h4>
                                <p>{todo.description}</p>
                            </ListGroupItem>
                        ))
                        }
                    </ListGroup>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    
    </Container>
  )
}

export default DisplayTodos