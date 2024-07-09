import { DataSource } from 'typeorm';
import DatabaseContant from '../database.constant';
import { Char } from 'src/resource/char/entities/char.entity';
import { CharType } from 'src/resource/char-type/entities/char-type.entity';
import { CharAbility } from 'src/resource/char-ability/entities/char-ability.entity';
import { AbilityOfChar } from 'src/resource/ability-of-char/entities/ability-of-char.entity';
import { TypeOfChar } from 'src/resource/type-of-char/entities/type-of-char.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: DatabaseContant.TYPE,
        host: DatabaseContant.HOST,
        port: DatabaseContant.PORT,
        username: DatabaseContant.USER_NAME,
        password: DatabaseContant.PASSWORD,
        database: DatabaseContant.DB_NAME,
        entities: [Char, CharType, CharAbility, AbilityOfChar, TypeOfChar],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
