export type HotPepperShop = {
  id: string;
  name: string;
  address: string;
  genre: { name: string };
  catch: string;
};

export type HotPepperResponse = {
  results: {
    api_version?: string;
    results_available?: number;
    results_returned?: string;
    results_start?: number;
    shop?: HotPepperShop[];
    error?: {
      message: string;
      code: string;
    };
  };
};
