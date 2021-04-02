import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import BookType from 'App/Models/BookType';

export default class BookTypeSeeder extends BaseSeeder {
  public async run () {
    await BookType.createMany([
      {
				id: 2100,
				name: 'Manga',
			},
      {
				id: 2000,
				name: 'Manhua',
      },
      {
				id: 1825,
				name: 'Manhwa',
			},
			{
				id: 2444,
				name: 'Web Novel',
			},
			{
				id: 26874,
				name: 'Published Novel',
			},
			{
				id: 2443,
				name: 'Light Novel',
			}
		]);
  }
}
