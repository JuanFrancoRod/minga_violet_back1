let read = (req, res, next) =>
  res.status(200).render("index", {
    title: "manga",
    subtitle: "endpoint manga",
  });

export default read;
