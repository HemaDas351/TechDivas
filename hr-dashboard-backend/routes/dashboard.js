router.get('/client-dashboard', verifyToken, async (req, res) => {
  try {
    if (req.user.role !== 'client') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const projects = await Project.find({ client: req.user.id });

    // Find upcoming or overdue deadlines
    const now = new Date();
    const twoDaysFromNow = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);

    const notifications = [];

    projects.forEach(project => {
      if (project.deadline < now) {
        notifications.push('⚠ Project "${project.title}" is overdue!');
      } else if (project.deadline < twoDaysFromNow) {
        notifications.push('⏳ Project "${project.title}" is due soon.');
      }
    });

    res.json({ projects, notifications });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});