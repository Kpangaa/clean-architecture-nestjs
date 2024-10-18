import { Injectable } from '@nestjs/common';

@Injectable()
export class SimulationService {
    constructor(private readonly ) {}
  createSimulation(): string {
    return 'Hello World!';
  }
}