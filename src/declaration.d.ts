// declaration.d.ts
declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

// declaration.d.ts
declare module "*.png" {
  const value: any;
  export default value;
}

// declaration.d.ts
declare module "*.svg" {
  const value: any;
  export default value;
}
