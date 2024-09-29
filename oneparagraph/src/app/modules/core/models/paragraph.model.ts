export class IndustryParagraph {
  constructor(
    public id: string, // Guid in C# maps to string in TypeScript
    public industry: string, // Assuming Industries is an enum in TypeScript
    public paragraph: string,
    public dateTime: Date, // DateTime in C# maps to Date in TypeScript
    public stocks: string[],
    public sourceUrls: string[],
    public sourceNames: string[]
  ) {}
}
