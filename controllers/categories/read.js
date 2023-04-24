let read = (req, res, next) =>
  res.status(200).render("index", {
    title: "categorias",
    subtitle: "aqui mas",
  });

  export default read