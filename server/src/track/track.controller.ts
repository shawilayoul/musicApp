import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from '@prisma/client';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  // create a track
  @Post()
  async createTrack(
    @Body()
    body: {
      title: string;
      artist: string;
      duration: number;
      url: string;
      artwork: string;
    },
  ) {
    return this.trackService.createTrack(body);
  }

  // get all tracks
  @Get()
  async getAllTracks() {
    return this.trackService.getAllTracks();
  }

  //get track by id
  @Get(':id')
  async getTrackById(@Param('id') id: string) {
    return this.trackService.getTrackById(id);
  }

  // update a track
  @Put(':id')
  async updateTrack(@Param('id') id: string, @Body() data: Partial<Track>) {
    return this.trackService.updateTrack(id, data);
  }

  // delete a track
  @Delete(':id')
  async deleteTrack(@Param('id') id: string) {
    return this.trackService.deleteTrack(id);
  }
}
