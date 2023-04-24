let read = (req, res, next) =>
  res.status(200).render("index", {
    title: "capitulo",
    subtitle: "aqui end",
  });

export default read;
