import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prismaService';
import { PlaylistDto } from 'src/Dto/playlistDto';

@Injectable()
export class PlaylistService {
  constructor(private prisma: PrismaService) {}

  // create a playlist
  async createPlaylist(dto: PlaylistDto) {
    return this.prisma.playlist.create({
      data: {
        name: dto.name,
        userId: dto.userId,
        length: dto.length,
        genre: dto.genre,
        descriptions: dto.descriptions,
        image: dto.image,
      },
    });
  }

  //get user playlist
  async getUserPlaylist(userId: string) {
    return this.prisma.playlist.findMany({
      where: { userId },
    });
  }

  // add a track to playlist
  async addTrackToPlaylist(playlistId: string, trackId: string) {
    return this.prisma.playlistTrack.create({
      data: {
        playlistId: playlistId,
        trackId: trackId,
      },
    });
  }

  // remove track from playlst
  async removeTrackFromPlaylist(playlistId: string, trackId: string) {
    return this.prisma.playlistTrack.deleteMany({
      where: {
        playlistId,
        trackId,
      },
    });
  }
  // get playlist with tracks
  async getPlaylistWithTrack(playlistId: string) {
    //check if the playlist exists
    const playlist = await this.prisma.playlist.findUnique({
      where: { id: playlistId },
    });
    if (!playlist) {
      throw new Error(`playlist with ID ${playlistId} not found`);
    }

    // fetch playlist a long with its ttrack
    const playlistWithTracks = await this.prisma.playlist.findUnique({
      where: { id: playlistId },
      include: {
        tracks: {
          include: {
            track: true, // fetch track details
          },
        },
      },
    });
    return playlistWithTracks;
  }
}
