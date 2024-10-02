import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  // add track to a user's liked tracks

  async addLikedTrack(userId: string, trackId: string) {
    //check if user and track exist before attemting to create the join

    const userExsits = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExsits) {
      throw new Error(`user with Id ${userId} dose not exsit`);
    }

    const trackExsits = await this.prisma.track.findUnique({
      where: { id: trackId },
    });

    if (!trackExsits) {
      throw new Error(`track with ID ${trackId} dose not exsit`);
    }
    // check if the user has already liked the track
    const existingLiking = await this.prisma.likedTrack.findUnique({
      where: {
        userId_trackId: {
          userId,
          trackId,
        },
      },
    });
    if (existingLiking) {
      throw new ConflictException('User has already liked this track');
    }
    return this.prisma.likedTrack.create({
      data: {
        userId,
        trackId,
      },
    });
  }
  //get track like by the user

  async getTracksLikedByUser(userId: string) {
    // check if user exist
    const userEsxit = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!userEsxit) {
      throw new NotFoundException(`user with Id ${userId} dose not exist`);
    }
    const likedTracks = await this.prisma.likedTrack.findMany({
      where: { userId },
      include: {
        track: true,
      },
    });
    return likedTracks.map((likedTrack) => likedTrack.track);
  }
}
