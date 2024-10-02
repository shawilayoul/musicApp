import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prismaService';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //create a user
  async createUser(data: {
    username: string;
    email: string;
    password: string;
  }) {
    return this.prisma.user.create({
      data,
    });
  }

  //find user by email
  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
  //get user playlist
  async getUserPlayLists(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        playlists: true, // include playlists when fetching the user
      },
    });
  }

  // add track liked by user

  async addLikedTrack(userId: string, trackId: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        likedTracks: {
          connect: { id: trackId },
        },
      },
    });
  }
}
