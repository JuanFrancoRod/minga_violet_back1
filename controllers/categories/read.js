import Category from "./../../models/Category.js";
let read = async (req, res, next) => {        //funcion controladora debe ser asincrona por mongo
  try {                                   //utilo try catch
    let all = await Category.find();          //utilizo find para buscar todos los recursos del modelo
    return res.status(200)
      .json({
        categories: all
      })                                       //configuro la respuesta al front
  }catch (error) {
    console.log(error)
    return res.status(400)
      .json({
      error: 'ERROR'
    })
    
  }
}
  
  /* res.status(200).render("index", {
    title: "categorias",
    subtitle: "aqui mas",
  }); */

  export default read