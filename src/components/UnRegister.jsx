import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useCourses } from "../../contexts/CoursesContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  open,
  onClose,
  courseId,
  courseTitle,
}) {
  const { unRegisterCourse } = useCourses();

  const handleUnRegister = (courseId) => {
    unRegisterCourse(courseId);
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          sx={{ fontSize: "2rem", textAlign: "center" }}
        >{`Are you sure you want to unregister for - ${courseTitle}`}</DialogTitle>
        <div className="d-flex justify-content-center mb-4">
          <DialogActions>
            <Button size="large" variant="outlined" onClick={onClose}>
              Disagree
            </Button>
            <Button
              size="large"
              variant="contained"
              onClick={() => handleUnRegister(courseId)}
            >
              Agree
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
