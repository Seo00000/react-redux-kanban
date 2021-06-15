export interface price {
  psa: string | number;
  brg: string | number;
  break: string | number;
}

export interface CardType {
  // playerImage?: string;
  id: number;
  smallTitle: string;
  title: string;
  tag: string;
  minimum: price;
  maximum?: price;
  recently: price;
  // minimum: Array<price>;
  // maximum?: Array<price>;
  // recently: Array<price>;
}
