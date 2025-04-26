export interface Card {
  id: string,
  likes: number,
  urlSmall: string,
  urlRegular: string,
  name: string,
  description: string | null,
}

interface fullCard {
  id: string,
  likes: number,
  urls: { small: string, regular: string },
  user: { name: string },
  alt_description: string | null,
}

export interface FetchData {
  results: fullCard[],
  total_pages: number,
  total: number,
}