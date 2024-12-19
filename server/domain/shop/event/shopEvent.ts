import { Shop_KEY } from "service/envValues";

export async function fetchHotPepperShops(
  lat: number,
  lng: number,
  range: number,
): Promise<string> {
  const url = "http://webservice.recruit.co.jp/hotpepper/shop/v1/";
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
    const data = await res.json();
    return JSON.stringify(data);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Fetch error:", errorMessage);
    throw new Error(`HotPepper API error: ${errorMessage}`);
  }
}
