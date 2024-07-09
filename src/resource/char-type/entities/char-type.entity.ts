import { BaseEntity } from 'src/database/typeorm/base-entity';
import { TypeOfChar } from 'src/resource/type-of-char/entities/type-of-char.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class CharType extends BaseEntity {
  @Column({ type: 'text' })
  typeName: string;

  @OneToMany(() => TypeOfChar, typeOfChar => typeOfChar.type)
  typesOfChar: TypeOfChar[];
}

