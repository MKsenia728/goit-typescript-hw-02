import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import { getGalleryByQuery } from "../../services/getGalleryByQuery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css";
import { Card, FetchData } from "./App.types";



function App() {
  const [topic, setTopic] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(0);
  const [gallery, setGallery] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);

  const searchGallery = (query: string): void => {
    if (query === "") {
      toast("Please, enter word for searching");
      return;
    }
    setError(false);
    setTopic(query);
    setPage(1);
    setGallery([]);
    setMaxPages(0);
  };

  const addPage = (): void => {
    return setPage(page + 1);
  };

  const openModal = (card: Card): void => {
    setIsOpen(true);
    setCurrentCard(card);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setCurrentCard(null);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const data: FetchData = await getGalleryByQuery<FetchData>(topic, page);
        if (data.results.length === 0) {
          toast("Nothing found for your request");
          return;
        }
        setMaxPages(data.total_pages);
        const dataArray = data.results.map(
          ({
            id,
            likes,
            urls: { small, regular },
            user: { name },
            alt_description,
          }) => ({
            id,
            likes,
            urlSmall: small,
            urlRegular: regular,
            name: name,
            description: alt_description,
          })
        );
        setGallery((prevData) => {
          return [...prevData, ...dataArray];
        });
      } catch {
        setError(true);
        setTopic("");
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [page, topic]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={searchGallery} topic={topic} />
      {gallery.length > 0 ? (
        <ImageGallery gallery={gallery} onOpen={openModal} />
      ) : (
        error && <ErrorMessage message="Something went wrong, try again" />
      )}
      <Loader loading={loading} />
      {page < maxPages && (
        <LoadMoreBtn onLoad={addPage} maxPages={maxPages - page} />
      )}
      <ImageModal isOpen={isOpen} onClose={closeModal} card={currentCard} />
      <Toaster
        containerStyle={{
          top: 30,
        }}
      />
    </div>
  );
}

export default App;
