import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useCourses } from "../../contexts/CoursesContext";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function FormDialog({ open, onClose, courseTitle, courseId }) {
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [isErrorName, setIsErrorName] = useState(false);
  const [helperTextName, setHelperTextName] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [helperTextEmail, setHelperTextEmail] = useState("");

  const { registerForCourse, registeredCourses } = useCourses();

  // Material ui's dialog form verkar ha en inbyggd validering redan för email men ej för full name validering, jag lägger till båda endå
  // Samt real-time feedback

  const handleInputName = (event) => {
    setNameField(event.target.value);
    setIsErrorName(false);
    setHelperTextName("");
  };

  const handleInputEmail = (event) => {
    setEmailField(event.target.value);
    setIsErrorEmail(false);
    setHelperTextEmail("");
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailField);
  };

  const validateName = () => {
    const namePattern = /^[a-zA-Z'-]+(\s[a-zA-Z'-]+)+$/;
    return namePattern.test(nameField);
  };

  const validateForm = () => {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    if (!isNameValid) {
      setIsErrorName(true);
      setHelperTextName("Please enter first & last name.");
    }

    if (!isEmailValid) {
      setIsErrorEmail(true);
      setHelperTextEmail("Please enter valid email.");
    }

    return isNameValid && isEmailValid ? true : false;
  };

  const handleClose = () => {
    setIsErrorName(false);
    setHelperTextName("");
    setIsErrorEmail(false);
    setHelperTextEmail("");

    onClose();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            noValidate: true,
            onSubmit: (event) => {
              event.preventDefault();

              if (validateForm()) {
                registerForCourse(courseId);
                onClose();
              } else {
                return;
              }
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
            error={isErrorName}
            helperText={helperTextName}
            margin="dense"
            id="name"
            name="name"
            label="Full name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleInputName}
          />
          <TextField
            autoFocus
            required
            error={isErrorEmail}
            helperText={helperTextEmail}
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            onChange={handleInputEmail}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size="large" variant="outlined">
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
