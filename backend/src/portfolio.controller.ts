import { Controller, Get } from '@nestjs/common';
import { portfolio } from './portfolio.data';
@Controller('portfolio')
export class PortfolioController {
  @Get() all() { return portfolio; }
}
