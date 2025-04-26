import { Card } from "../App/App.types";

export interface ImageModalProps {
  isOpen: boolean, 
  onClose:()=> void,
  card: Card | null,
}