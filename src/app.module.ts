import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModule } from './job/job.module';
//import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pipes',
      synchronize: true,
      autoLoadEntities: true,
      migrationsTableName: 'migrations',
      migrations: [],
    }),
    JobModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
