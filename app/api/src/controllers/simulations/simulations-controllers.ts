import { Controller, Get } from '@nestjs/common';

@Controller()
export class SimulationsController {
  constructor(
    private readonly simulationService: ISimulationService
  ) {}

  @Get()
  getSimulation(simulation): string {
    const simulation = await this.simulationService.getSimulation();
  }
}
