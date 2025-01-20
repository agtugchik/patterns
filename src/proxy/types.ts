interface ProxyHandler extends Object {
  get?: (target: Object, prop: string) => void;
  set?: (target: Object, prop: string, value: any) => void;
}

export { ProxyHandler };
