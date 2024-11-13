import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookPreview = () => {
  const { bookName } = useParams();

  useEffect(() => {});

  return (
    <div>
      BookPrview
      <p>{bookName}</p>
    </div>
  );
};

export default BookPreview;
