import Database from "../Database/index.js";

function AssignmentsRoutes(app) {
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = Database.assignments.filter((m) => m.course === cid);
    res.send(assignments);
  });
  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    Database.assignments.push(newAssignment);
    res.send(newAssignment);
  });
  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    Database.assignments = Database.assignments.filter((a) => a._id !== aid);
    res.sendStatus(200);
  });
  app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignment = req.body;
    Database.assignments = Database.assignments.map((a) =>
      a._id === aid ? assignment : a
    );
    res.sendStatus(204);
  });
}

export default AssignmentsRoutes;
