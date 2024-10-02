import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
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
  @Put(':userId')
  async addLikedTrack(
    @Param('userId') userId: string,
    @Body() trackId: string,
  ) {
    return this.userService.addLikedTrack(userId, trackId);
  }
}
