import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Books extends BaseSchema {
  protected tableName = 'books'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id');
      table.string('slug').unique();
      table.string('title').notNullable();
			table.text('description');
			table.string('cover');
			table.string('color');
			table.string('banner');
			table.dateTime('release_year');
			table.dateTime('finished_year').defaultTo(null);
			table.integer('chapters').defaultTo(0);
			table.string('target_audience').comment('0 = Male, 1 - Female').defaultTo(0);
			table.integer('last_chapter_id');
			table.integer('type_id');
			table.integer('language_id');
			table.integer('status_id').defaultTo(2);
			table.integer('author_id');
      table.integer('artist_id');
      table.bigInteger('words').defaultTo(0);
      table.integer('COO_status_id');
      table.boolean('is_original').defaultTo(false);
      table.boolean('is_adult');
      table.boolean('is_comic').defaultTo(true);
			table.boolean('is_visible').defaultTo(true);
			table.boolean('free_edition').defaultTo(true);
			table.boolean('is_pay').defaultTo(true);
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
