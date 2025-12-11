/*==================================================
NewStudentView.js

Renders the input form for creating a new student.
Receives handler functions + optional error messages from the Container.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
    paddingBottom: '20px'
  },
  title: { textAlign: 'center' },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '8px'
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px'
  }
}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit, errorMessage, campusId } = props;
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>New Student</h1>

      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{ fontWeight: 'bold', fontSize: '20px', color: '#11153e' }}>
            Add a Student
          </Typography>
        </div>

        {errorMessage && (
          <p className={classes.errorText}>{errorMessage}</p>
        )}

        <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>

          {/* FIRST NAME */}
          <label>First Name: </label>
          <input type="text" name="firstName" onChange={handleChange} required />
          <br /><br />

          {/* LAST NAME */}
          <label>Last Name: </label>
          <input type="text" name="lastName" onChange={handleChange} required />
          <br /><br />

          {/* EMAIL */}
          <label>Email: </label>
          <input type="email" name="email" onChange={handleChange} required />
          <br /><br />

          {/* IMAGE */}
          <label>Image URL: </label>
          <input type="text" name="imageUrl" placeholder="Optional" onChange={handleChange} />
          <br /><br />

          {/* GPA */}
          <label>GPA (0–4): </label>
          <input type="number" name="gpa" step="0.1" min="0" max="4" placeholder="Optional" onChange={handleChange} />
          <br /><br />

          {/* CAMPUS ID — OPTIONAL */}
          <label>Campus ID: </label>
          <input
            type="number"
            name="campusId"
            value={campusId || ""}
            placeholder="Optional"
            onChange={handleChange}
          />
          <br /><br />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>

          <br /><br />
        </form>
      </div>
    </div>
  );
};

export default NewStudentView;