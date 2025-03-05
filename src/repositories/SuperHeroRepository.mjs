import SuperHero from "../models/SuperHero.mjs";
import IRepository from "../repositories/IRepository.mjs";
import mongoose from "mongoose";

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    if (mongoose.isValidObjectId(id)) {
      return await SuperHero.findById(id);
    }
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    const query = { [atributo]: new RegExp(valor, "i") };
    return await SuperHero.find(query);
  }

  async obtenerMayoresDe30() {
    return await SuperHero.find({ edad: { $gt: 30 } });
  }

  async crearSuperhero(data) {
    return await SuperHero.create(data);
  }

  async updateHero(id, data) {
    return await SuperHero.updateOne({ _id: id }, data);
  }

  async deleteId(id) {
    return await SuperHero.deleteOne({ _id: id });
  }

  async deleteName(name) {
    return await SuperHero.deleteOne({ nombreSuperHeroe: name });
  }
}

export default new SuperHeroRepository();

// Criterios de busqueda
//  planetaOrigen: "Tierra",
// poderes: { $size: { $gte: 2 } },
