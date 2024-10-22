import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ReservationModule } from './reservation/reservation.module';
import { MongooseModule } from 'mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://DANIEL:123456@localhost:27017/'),AuthModule, UsersModule, WorkspacesModule, ReservationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
