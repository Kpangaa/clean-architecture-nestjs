
export class GetSimulationCommand {
  constructor(
    public readonly clientId: string,
    public readonly productId: number,
    public readonly amount: number,
    public readonly firstExpirationDate: Date,
) {}
}
