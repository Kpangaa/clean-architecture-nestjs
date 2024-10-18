export const ISimulationProvider = Symbol('ISimulationProvider');

export interface ISimulationProvider {
    getSimulation(payload: SimulationProviderRequest): Promise<SimulationProviderResult>;
}