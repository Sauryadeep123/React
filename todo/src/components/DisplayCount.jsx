import React from 'react'
import { Container,Card } from 'react-bootstrap'
import { connect } from 'react-redux'
function DisplayCount({todos}) {
  return (
   <Container>
    <Card>
        <Card.Body>
            <h3>No of todo:{todos.length}</h3>
        </Card.Body>
    </Card>
   </Container>
  )
}
const mapStateToProps=(state)=>{
    return {todos:state.todoReducer}
}
const mapDisptchToProps=(Dispatch)=>({});
export default connect(mapStateToProps,mapDisptchToProps) (DisplayCount)