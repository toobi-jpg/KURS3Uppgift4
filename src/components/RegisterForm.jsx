import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useCourses } from "../../contexts/CoursesContext";
import { useContext, useState } from "react";

// const registeredCourses = localStorage.getItem("courses") || "";
// const coursesArr = registeredCourses ? registeredCourses.split(",") : [];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function FormDialog({ open, onClose, courseTitle, courseId }) {
  const [inputField, setInputField] = useState("");

  const { registerForCourse, registeredCourses } = useCourses();

  const handleInput = (event) => {
    setInputField(event.target.value);
  };

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
              registerForCourse(courseId);

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
            onChange={handleInput}
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
            onChange={handleInput}
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
