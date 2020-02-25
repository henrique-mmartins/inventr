import React, { useState } from 'react';
import { Card } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardHeader from '@material-ui/core/CardHeader';

const jsonPlaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 3000,
});

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    maxWidth: 400,
    paddingBottom: theme.spacing(8),
  },
  textField: {
    margin: theme.spacing(4),
    alignSelf: 'center',
    minWidth: 250,
    maxWidth: 350,
  },
  submitButton: {
    margin: theme.spacing(4),
    alignSelf: 'center',
    minWidth: 250,
    maxWidth: 350,
  },
}));

const App = () => {
  const classes = useStyles();
  const [values, setValues] = useState({ userId: 1 });

  const savePosts = () => {
    jsonPlaceholder.post('/posts', values).then(() => {
      toast.info('Post saved');
    }).catch((error) => {
      toast.error(error.message);
    });
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.currentTarget.name]: event.currentTarget.value });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card className={classes.mainDiv}>
        <CardHeader title="Create a new Post" />
        <TextField label="Title" name="title" variant="outlined" className={classes.textField} onChange={handleChange} />
        <TextField label="Body" name="body" variant="outlined" className={classes.textField} multiline rows="4" onChange={handleChange} />
        <Button variant="contained" color="primary" className={classes.submitButton} onClick={savePosts}>Submit</Button>
      </Card>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default App;
