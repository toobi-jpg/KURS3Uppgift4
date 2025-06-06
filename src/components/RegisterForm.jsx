import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useContext } from "react";

let isRegistered = localStorage.getItem("course");

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function FormDialog({ open, onClose, courseTitle, courseId }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={open}
        onClose={onClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              localStorage.setItem("user", email);
              localStorage.setItem("course", courseId);
              onClose();
            },
          },
        }}
      >
        <DialogTitle className="fs-1">
          <span style={{ opacity: "75%" }}>Register for the course - </span>
          {courseTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="fs-5 mb-3">
            To register to this course, please enter the required fields.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Full name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} size="large" variant="outlined">
            Cancel
          </Button>
          <Button type="submit" size="large" variant="contained">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
