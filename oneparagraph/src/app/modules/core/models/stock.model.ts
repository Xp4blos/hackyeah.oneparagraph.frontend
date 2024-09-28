export class Stock {
  constructor(
    public name: string,
    public percent: string,
    public description: string,
    public tags: string[],
    public sources: string[]
  ) {}
}
