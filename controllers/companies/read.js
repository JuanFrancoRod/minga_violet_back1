let read = (req, res, next) =>
  res.status(200).render("index", {
    title: "companias",
    subtitle: "endpoint companias",
  });

export default read;
