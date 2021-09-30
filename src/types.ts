export type ExtractFromArray<T> = T extends Array<infer Item> ? Item : never
