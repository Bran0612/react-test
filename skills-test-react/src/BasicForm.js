import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = ({ onAddTodo }) => (
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        todo: '',
      }}
      onSubmit={(values) => { onAddTodo(values) }}
    >
      <Form>
        <label htmlFor="todo">Add ToDo </label>
        <Field id="todo" name="todo" placeholder="TextHere" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default BasicForm
