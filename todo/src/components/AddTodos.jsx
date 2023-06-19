import React from 'react'
import { useState } from 'react'
import { Container,Card ,Row,Col,Form, FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import { addtodo } from '../Redux/Actions/Todo'

function AddTodos({addtodo}) {
    const [todo,SetTodo]=useState({
        title:'',
        description:'',
        id:''
    })
    const handleSubmit=(event)=>{
        event.preventDefault();
        //add todo
        addtodo({...todo,id:v4()})
       // console.log(todo);
        SetTodo({
            title:'',
            description:'',
            
        })
    }
  return (
   <Container>
    <Row>
        <Col md={12}>
            <Card className="shadow-sm">
                <Card.Body>
                    <h3>Add todo here</h3>
                    <Form onSubmit={handleSubmit}> 
                        <FormGroup>
                            <FormLabel>Todo Title</FormLabel>
                            <FormControl type='text' placeholder='enter your todo Title'
                              value={todo.title}
                              onChange={event=>SetTodo({...todo,title:event.target.value})}
                            ></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Todo Description</FormLabel>
                            <FormControl as={"textarea"} placeholder='enter your todo Description'
                              value={todo.description}
                              onChange={event=>SetTodo({...todo,description:event.target.value})}
                            ></FormControl>
                        </FormGroup>
                        <Container className='text-center mt-3'>
                            <Button variant='primary' type='submit'  >Add</Button>
                        </Container>
                    </Form>
                </Card.Body>

            </Card>
        </Col>
    </Row>
   </Container>
  )
}
const mapStateToProps=(state)=>({});
const mapDisptchToProps=(Dispatch)=>({
    addtodo:(todo)=>(Dispatch(addtodo(todo)))
});
export default connect(mapStateToProps,mapDisptchToProps) (AddTodos)