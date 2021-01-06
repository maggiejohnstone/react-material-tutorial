import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBoxIcon from "@material-ui/icons/AddBox";
import TextField from "@material-ui/core/TextField";

export default class extends React.Component{
    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    };

    handleChange = name => ({ target: { value}}) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }

        })
    }


    render() {
        const { open, exercise: { title, description, muscles }} = this.state
        return (
            <div>
                <Button onClick={this.handleToggle}>
                    <AddBoxIcon fontSize={"large"}/>
                </Button>
                <Dialog
                    open={open}
                    onClose={this.handleToggle}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Create a New Exercise"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Please fill out the form below
                        </DialogContentText>
                    </DialogContent>
                    <form>
                        <TextField
                            label="title"
                            value={title}
                            onChange={this.handleChange('title')}
                            margin={"normal"}
                        />
                        <TextField
                            multiline
                            rows="4"
                            label="description"
                            value={title}
                            onChange={this.handleChange('description')}
                            margin="normal"
                        />
                    </form>
                    <DialogActions>
                        <Button variant={"contained"} color={"secondary"} onClick={this.handleToggle} color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}