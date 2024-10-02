import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PlaylistService } from './playlist.service';

@Controller('playlist')
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}
  @Post()
  async createPlaylist(@Body() data: { name: string }) {
    return this.playlistService.createPlaylist(data);
  }
  /* @Get(':userId')
  async getUserPlaylist(@Param('userId') userId: string) {
    return this.playlistService.getUserPlaylist(userId);
  }*/

  // add track to playlist
  @Post(':playlistId/addTrack/:trackId')
  async addTrackToPlaylist(
    @Param('playlistId') playlistId: string,
    @Param('trackId') trackId: string,
  ) {
    return this.playlistService.addTrackToPlaylist(playlistId, trackId);
  }

  // remove track from playlist
  @Delete(':playlistId/removeTrack/:trackId')
  async removeTrackFromPlaylist(
    @Param('playlistId') playlistId: string,
    @Param('trackId') trackId: string,
  ) {
    return this.playlistService.removeTrackFromPlaylist(playlistId, trackId);
  }

  //get playlist with tracks
  @Get('tracks/:playlistId')
  async getPlaylistWithTracks(@Param('playlistId') playlistId: string) {
    return this.playlistService.getPlaylistWithTrack(playlistId);
  }
}
