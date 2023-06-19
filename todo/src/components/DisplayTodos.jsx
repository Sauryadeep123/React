import React from 'react'
import { Container,Row,Col,Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { useState } from 'react'
import { connect } from 'react-redux'
import { deletetodo } from '../Redux/Actions/Todo'
function DisplayTodos({todos,deletetodo}) {

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
                                <Button onClick={event=>deletetodo(todo.id)} variant='danger' type='sm'>delete</Button>
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
const mapStateToProps=(state)=>{
    return {todos:state.todoReducer}
}
const mapDisptchToProps=(Dispatch)=>({
    deletetodo:(id)=>(Dispatch(deletetodo(id)))
})



export default connect(mapStateToProps,mapDisptchToProps) (DisplayTodos)