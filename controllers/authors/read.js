let read = (req, res, next) => res.status(200).render("index", {
    title: "autores",
    subtitle: "endpoint autoes"
});

export default read
