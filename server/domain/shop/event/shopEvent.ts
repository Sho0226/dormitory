import { Shop_KEY } from "service/envValues";
import type { HotPepperResponse, HotPepperShop } from "../type";

//eslint-disable-next-line
export async function fetchHotPepperShops(
  lat: number,
  lng: number,
  range: number,
): Promise<HotPepperShop[]> {
  const url = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
  const params = {
    key: Shop_KEY,
    lat: lat.toString(),
    lng: lng.toString(),
    range: range.toString(),
    format: "json",
  };

  try {
    const res = await fetch(`${url}?${new URLSearchParams(params)}`);
    if (!res.ok) {
      throw new Error("Failed to fetch shops from HotPepper API.");
    }

    const data: HotPepperResponse = await res.json();

    // エラー判定
    if (data.results.error) {
      throw new Error(`HotPepper API error: ${data.results.error.message}`);
    }

    if (!data.results.shop || data.results.shop.length === 0) {
      throw new Error("No shop information found in the API response.");
    }

    const randomShops = data.results.shop
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    return randomShops;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Fetch error:", errorMessage);
    throw new Error(`HotPepper API error: ${errorMessage}`);
  }
}
