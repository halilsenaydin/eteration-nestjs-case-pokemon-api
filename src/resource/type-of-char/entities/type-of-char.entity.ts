import { BaseEntity } from 'src/database/typeorm/base-entity';
import { CharType } from 'src/resource/char-type/entities/char-type.entity';
import { Char } from 'src/resource/char/entities/char.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class TypeOfChar extends BaseEntity {
  @Column({ type: 'text' })
  typeId: string;

  @Column('text')
  charId: string;

  @ManyToOne(() => Char, char => char.typesOfChar)
  char: Char;

  @ManyToOne(() => CharType, charType => charType.typesOfChar)
  type: CharType;
}
