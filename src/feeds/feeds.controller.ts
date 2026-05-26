import { Controller, Get } from '@nestjs/common';
import { FeedsService } from 'src/feeds/feeds.service';

@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}
  @Get()
  getFeeds() {
    return this.feedsService.getFeeds();
  }
}
