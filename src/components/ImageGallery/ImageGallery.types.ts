import { Card } from "../App/App.types";

export interface GalleryProps {
  gallery: Card[],
  onOpen: (card: Card) => void;
}
