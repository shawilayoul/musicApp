import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() body: { username: string; email: string; password: string },
  ) {
    return this.userService.createUser(body);
  }

  @Get('findByEmail')
  async findUserByEmail(@Query('email') email: string) {
    if (!email) {
      return { message: 'Email query parameter is required' };
    }

    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      return { message: 'User not found' };
    }
    return user;
  }

  // get user playlist by user id
  @Get(':userId')
  async getUserPlaylist(@Param('userId') userId: string) {
    return this.userService.getUserPlayLists(userId);
  }
  // add liked tracks by user
  @Post(':userId/like/:trackId')
  async addLikedTrack(
    @Param('userId') userId: string,
    @Param('trackId') trackId: string,
  ) {
    return this.userService.addLikedTrack(userId, trackId);
  }

  // add liked tracks by user
  @Delete(':userId/unlike/:trackId')
  async deleteLikedTrack(
    @Param('userId') userId: string,
    @Param('trackId') trackId: string,
  ) {
    return this.userService.deleteLikedTrack(userId, trackId);
  }
  // det tacks like by user
  @Get(':userId/likedTrack')
  async getTracksLikedByUser(@Param('userId') userId: string) {
    return this.userService.getTracksLikedByUser(userId);
  }
}
