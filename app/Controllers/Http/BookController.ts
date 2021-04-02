import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'

const getByIdWithList = ['genres', 'tags', 'publishers']

export const status = {
  2: 'Em lançamento',
  1: 'Completo',
  3: 'Hiatus'
}

export default class BookController {
  async index({ request }: HttpContextContract) {
    const { sortColumn, sortType } = request.all()
    const query = Book.query()
      .preload('type')
      .preload('genres')


    if (sortColumn) {
      query.orderBy(sortColumn, sortType)
    }

    const books = await query.exec()
    return books
  }


  async all() {
    const books = await Book.query().select('id', 'title').exec()
    return books
  }

}
