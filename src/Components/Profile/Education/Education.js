import React, { useState } from "react";
import "./Education.css";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import Dialog from "../../Dialog/Dialog";
import EditEducation from "./Edit/EditEducation";

const education = [
  {
    school: "Sahyadri College of Engineering and Management",
    schoolImage:
      "data:image/jpeg;base64,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",
    degree: "Bachelors of Engineering",
    field: "Electronics And Communication Engineering",
    start: "2015",
    end: "2019",
  },
];

function Education() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="profile-education">
      <div className="education-heading">
        <h2>Education</h2>
        <AddIcon onClick={() => setIsDialogOpen(true)} />

        <Dialog
          title="Edit Education"
          isOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        >
          <EditEducation />
        </Dialog>
      </div>
      <div className="education-content">
        {education.map((edu) => {
          return (
            <div className="education-list">
              <div className="edit-icon">
                <CreateIcon />
              </div>
              <img src={edu.schoolImage} alt={edu.school} />
              <div className="education-info">
                <h4>{edu.school}</h4>
                <p className="edu-degree">{edu.degree + " . " + edu.field}</p>
                <p className="edu-timeline">{edu.start + " - " + edu.end}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
