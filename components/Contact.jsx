import { useState } from "react";
import client from "../sanity/client";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

const Contact = () => {
    const [name, setName] = useState('');
    const [restname, setRestName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [dialog, setDialog] = useState(false);

    const submitMessage = () => {
        if (name.length != 0 && email.length != 0 && message.length != 0 && restname.length != 0) {
            setLoading(true);
            const doc = {
                _type: 'contact',
                name,
                email,
                message,
                restname

            }
            client.create(doc).then((res) => {
                setLoading(false);
                setEmail('');
                setRestName('');
                setName('');
                setMessage('');
                setDialog(true);
               
            }).catch((e) => {

            });
        } else {

        }
    }

    return (

        <div className="container section" id="contact">
            <div className="text-center title display-4">
                Wanna Connect With Me ?
            </div>
            <div className="row ">
                <div className="col-lg-4">
                    <input type="text" className="form-control mt-4" placeholder="Enter your name.." onChange={(e)=>{
                        setName(e.target.value)
                    }} />
                </div>
                <div className="col-lg-4">
                    <input type="text" className="form-control mt-4" placeholder="Enter the name of your restaurant..." onChange={(e)=>{
                        setRestName(e.target.value)
                    }} />

                </div>
                <div className="col-lg-4">
                    <input type="text" className="form-control mt-4" placeholder="Enter your email..." onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />

                </div>
            </div>
            <div className="mt-4">
                <textarea type="text" placeholder="Enter your Message" className="form-control" onChange={(e)=>{
                    setMessage(e.target.value)
                }}></textarea>
            </div>
            <div className="d-flex justify-content-lg-end justify-content-center mt-3">
              {
                   (loading) ? (<CircularProgress />) : ( <button className="btn  btn-outline-primary" onClick={submitMessage}> SUBMIT MESSAGE </button>)
              }
            </div>
            <div className="mt-5 title display-6 text-center">
                OR
            </div>
            <div className="mt-5 display-6 text-center">
                Call Or Whatsapp Now @ <a href="#"> +91 6290341107 </a>
            </div>
            
            <Dialog
                open={dialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title" className="bg-dark text-primary fw-bold">
                    Thanks for contacting !
                </DialogTitle>
                <DialogContent className="bg-dark font-bold ">
                    <DialogContentText id="alert-dialog-description " className="text-primary font-bold">
                        I will reach you out soon on the email you provided, I will try my best to help
                        you 😊😊
                    </DialogContentText>
                </DialogContent>
                <DialogActions className="bg-dark text-primary">
                    <button className=" text-primary px-4 py-2 rounded-md mt-4 font-semibold" onClick={() => { setDialog(false) }}> NOICE !! </button>
                </DialogActions>
            </Dialog>
        </div>


    );
}

export default Contact;