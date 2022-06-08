import React from "react";
//MUI
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog(props) {
  const { handleRemove, isOpen, handleClose, task} = props;

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Remove a Task"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Delete "{task}"?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleRemove} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
