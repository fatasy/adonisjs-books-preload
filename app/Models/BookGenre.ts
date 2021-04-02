/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BookGenre extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public bookId: number
  @column()
  public genreId: number

	static get table() {
		return 'book_genre';
	}
}


