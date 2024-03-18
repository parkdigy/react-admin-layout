declare global {
  type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
  type PartialOmit<T, K extends keyof T> = Partial<Omit<T, K>>;
  //--------------------------------------------------------------------------------------------------------------------
  function ll(message?: any, ...optionalParams: any[]): void;
}

globalThis.ll = function (message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
};

export {};
