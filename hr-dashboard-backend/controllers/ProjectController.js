exports.addProject = (req, res) => {
  const { title, description } = req.body;
  console.log("Project received:", title, description);
  res.json({ message: 'Project added successfully!' });
};