export const ISimulationRepository = Symbol('ISimulationRepository');

import { SimulationEntity } from '../entities'

export interface ISimulationRepository {
    save(simulation: SimulationEntity): Promise<SimulationEntity>;
}