import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import data from '../data.json';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
export default function Employee() {
  const [open, setOpen] = React.useState(false);
  const [emp, setEmp] = React.useState(data);
  const [semp, setSEmp] = React.useState(emp);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");

  let np=emp;
  


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleRemove = (index) => {

    let roomstodeleteByid = [...emp].filter(vl=>vl.email!==index);
    setEmp(roomstodeleteByid);


  
    // localStorage.setItem('emp',)
    
  };

  const find = (e) => {
    console.log(e,np);
    
    if(e!=''){

    let employee=[...emp].filter((val)=>{return(val.email.toLowerCase().includes(e.toLowerCase()))})
setEmp(employee)
  console.log(employee);
    }
    else{

      setEmp(semp)
    }
    // localStorage.setItem('emp',)
    
  };

  
  const handleAdd = () => {
    let user={
      name:name,
      email:email,
      role:role
    }
    let em=[];
    em=[...emp,{...user}]
    console.log("df",em);
    setEmp(em)
    setSEmp(em)
    np=em
    console.log(emp);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Employee
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Add new Employee, please enter name & email address here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            fullWidth
            variant="standard"
          />
                  <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            onChange={(e)=>setName(e.target.value)}
            fullWidth
            variant="standard"
          />
                <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Role"
            type="text"
            onChange={(e)=>setRole(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>

  
        <h2>All Employees</h2>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Find Employee"
            type="text"
            onKeyUp={(e)=>find(e.target.value)}
            fullWidth
            variant="standard"
          />
        {
     emp?.map((p,i)=>{
            return(
              <>
              
            



 
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
     
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            
            {i+1}
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               Name: {p.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {p.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {p.role}
              </Typography>
            </Grid>
            <Grid item>
              <Typography onClick={()=>handleRemove(p.email)} sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              Edit
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  


                  </>


            )
        
          })
        }

    </div>
  );
}
