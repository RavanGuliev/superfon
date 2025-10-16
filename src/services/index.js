import axios from "axios";

const BASE_URL = import.meta.env.VITE_SUPERFON_BACKEND_URL;

export async function getAllCategory() {
  try {
    const { data } = await axios.get(`${BASE_URL}/categories`);
    return data?.[0]?.data?.items ?? [];
  } catch {
    console.log("ishlemir");
    return [];
  }
}


export async function getAllCards() {
  try {
    const { data } = await axios.get(`${BASE_URL}/new`);
    return data?.[0]?.data?.items ?? [];
  } catch {
    console.log("ishlemir");
    return [];
  }
}
export async function getProductById(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/new`);
    const items = data?.[0]?.data?.items ?? [];
    const product = items.find((item) => item.id === Number(id));
    return product ?? null;
  } catch (err) {
    console.error("Məhsul tapılmadı", err);
    return null;
  }
}


export async function getAllBest() {
  try {
    const { data } = await axios.get(`${BASE_URL}/bestsellers`);
    return data?.[0]?.data?.items ?? [];
  } catch {
    console.log("ishlemir");
    return [];
  }
}

export async function getBestProductById(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/bestsellers`);
    const items = data?.[0]?.data?.items ?? [];
    const product = items.find((item) => item.id === Number(id));
    return product ?? null;
  } catch (err) {
    console.error("Məhsul tapılmadı", err);
    return null
  }
}


export async function getAllvideo() {
  try {
    const { data } = await axios.get(`${BASE_URL}/video`);
    return data?.[0]?.data?.items ?? [];
  } catch {
    console.log("ishlemir");
    return [];
  }
}

export async function getAlltags() {
  try {
    const { data } = await axios.get(`${BASE_URL}/tags`);
    return data?.[0]?.data?.items ?? [];
  } catch {
    console.log("ishlemir");
    return [];
  }
}

export async function getAllAddress() {
  try {
    const { data } = await axios.get(`${BASE_URL}/ourstores`);
    return data?.[0]?.data?.items ?? [];
  } catch {
    console.log("ishlemir");
    return [];
  }
}


export async function getAllWatch() {
  try {
    const { data } = await axios.get(`${BASE_URL}/watch`);
    return data?.[0]?.data?.items ?? [];
  } catch {
    console.log("ishlemir");
    return [];
  }
}

export async function getWatchById(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/watch`);
    const items = data?.[0]?.data?.items ?? [];
    const product = items.find((item) => item.id === Number(id));
    return product ?? null;
  } catch (err) {
    console.error("Məhsul tapılmadı", err);
    return null;
  }
}


