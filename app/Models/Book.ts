import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  hasOne,
  HasOne,
  manyToMany,
  ManyToMany,
  hasMany,
  HasMany
} from '@ioc:Adonis/Lucid/Orm'




import Genre from 'App/Models/Genre'
import BookGenre from 'App/Models/BookGenre'
import BookType from 'App/Models/BookType'


export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public slug: string
  @column()
  public title: string | null
  @column()
  public description: string | null
  @column()
  public cover: string
  @column()
  public color: string
  @column()
  public banner: string
  @column()
  public releaseYear: Date
  @column()
  public finishedYear: Date
  @column()
  public chapters: number
  @column()
  public targetAudience: string
  @column()
  public lastChapterId: number
  @column()
  public typeId: number
  @column()
  public languageId: number | null
  @column()
  public statusId: number | null
  @column()
  public authorId: number | null
  @column()
  public artistId: number | null
  @column()
  public words: number
  @column()
  public isOriginal: boolean
  @column()
  public isAdult: boolean
  @column()
  public isComic: boolean | undefined
  @column()
  public isVisible: boolean
  @column()
  public freeEdition: boolean
  @column()
  public isPay: boolean
  @column()
  public hasSource?: number
  @column()
  public status?: { id: number; name: string }
  @column()
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Genre)
  public genres: ManyToMany<typeof Genre>

  @hasMany(() => BookGenre)
  public genre: HasMany<typeof BookGenre>


  @hasOne(() => BookType, {
    localKey: 'typeId',
    foreignKey: 'id'
  })
  public type: HasOne<typeof BookType>

}
