import { Book } from "@content";
import { allBooks } from "@content";
import BookItem from "@/components/book";

export default function Trips() {
  return (
    <div className="gap-8 grid grid-cols-2 md:grid-cols-3">
      {allBooks
        .filter((el) => el.status === "reading")
        .map((book: Book) => {
          return (
            <BookItem
              key={book.name}
              coverSrc={book.coverSrc}
              name={book.name}
              status={book.status}
            ></BookItem>
          );
        })}
      {allBooks
        .filter((el) => el.status === "read")
        .map((book: Book) => {
          return (
            <BookItem
              key={book.name}
              coverSrc={book.coverSrc}
              name={book.name}
              status={book.status}
            ></BookItem>
          );
        })}
    </div>
  );
}
