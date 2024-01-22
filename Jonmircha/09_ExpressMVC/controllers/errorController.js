const notFound = (req, res) => {
  res.status(404).render("error", {
    title: "Error 404 Not Found",
    message: "El recurso que estás buscando no existe",
  });
};

export default { notFound };
