import { Controller, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Controller()
export class SimulationsController {
  constructor(
    constructor(
      private readonly commandBus: CommandBus, 
      private readonly queryBus: QueryBus
    ) {}
  ) {}

  @Get()
  getSimulation(payload): any {
    try {
      return this.commandBus.execute(new GetSimulation(payload));
    } catch (error) {
      
    }
  }
}
