import { BaseEntity } from 'src/database/typeorm/base-entity';
import { AbilityOfChar } from 'src/resource/ability-of-char/entities/ability-of-char.entity';
import { TypeOfChar } from 'src/resource/type-of-char/entities/type-of-char.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Char extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column('int')
  weight: number;

  @Column('int')
  height: number;

  @Column('boolean')
  isDefault: boolean;

  @OneToMany(() => AbilityOfChar, abilityOfChar => abilityOfChar.char)
  abilitiesOfChar: AbilityOfChar[];

  @OneToMany(() => TypeOfChar, typeOfChar => typeOfChar.char)
  typesOfChar: TypeOfChar[];
}
