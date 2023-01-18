import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      synchronize: true,
      logging: false,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    }),
    CatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
