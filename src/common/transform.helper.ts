export class TransformHelper {
    public static trim({ value }: { value: string }): string {
        return value ? value.trim() : value;
    }

    public static toLowerCase({ value }: { value: string }): string {
        return value ? value.toLowerCase() : value;
    }

    public static toUpperCase({ value }: { value: string }): string {
        return value ? value.toUpperCase() : value;
    }
}
