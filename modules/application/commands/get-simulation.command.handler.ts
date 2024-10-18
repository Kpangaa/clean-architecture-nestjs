import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { Logger, Inject } from '@nestjs/common';
import { GetSimulationCommand } from './get-simulation.command';
import { IClientsProductsService } from '../../domain/services/client-products.service.inteface'
import { ISimulationProvider } from '../../domain/providers/simulation-provider.interface'
import { ISimulationRepository } from '../../domain/repository/simulation-repository.interface'

@CommandHandler(GetSimulationCommand)
export class UpdateProductHandler implements ICommandHandler<GetSimulationCommand> {
  constructor(
    @Inject(IClientsProductsService)
    private readonly clientsProductsService: IClientsProductsService,
    @Inject(ISimulationProvider)
    private readonly simulationProvider: ISimulationProvider,
    @Inject(ISimulationRepository)
    private readonly simulationRepository: ISimulationRepository,
  ) {}

  async execute(command: GetSimulationCommand) {
    const { clientId, productId, amount, firstExpirationDate } = command;
    const products = await this.clientsProductsService.getEnabledProducts(clientId);

    const product = products.find((element) => element.id === productId)
    if (!product) throw ProductNotEnabled(clientId, productId)

    const simulationResult = await this.simulationProvider.getSimulation({clientId, productId, amount, firstExpirationDate});
    const simulation = new SimulationEntity({clientId, productId, amount, firstExpirationDate, simulationResult});

    const simulationSaved = await this.simulationRepository.save(simulation);

    return simulationSaved;
  }
}
