import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prismaService';
import { Track } from '@prisma/client';

@Injectable()
export class TrackService {
  constructor(private prisma: PrismaService) {}

  // create a track
  async createTrack(data: {
    title: string;
    artist: string;
    duration: number;
    url: string;
    artwork: string;
  }) {
    return this.prisma.track.create({ data });
  }
  // geting all tracks
  async getAllTracks() {
    return this.prisma.track.findMany();
  }
  //get a track by id
  async getTrackById(id: string) {
    return this.prisma.track.findUnique({ where: { id } });
  }
  // update a track
  async updateTrack(id: string, data: Partial<Track>): Promise<Track> {
    return this.prisma.track.update({ where: { id }, data });
  }

  // delete a track
  async deleteTrack(id: string) {
    return this.prisma.track.delete({ where: { id } });
  }
}
