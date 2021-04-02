import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BookGenres extends BaseSchema {
  protected tableName = 'book_genres'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('book_id');
      table.integer('genre_id').unsigned().index('genre_id');
      table.foreign('genre_id').references('genres.id').onDelete('cascade');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
