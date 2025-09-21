import { BookData } from "@/types";

export default async function fetchOneBook(id: number): Promise<BookData | null> {
  const url = `http://localhost:12345/book/${id}`;
  try {
    const oneBooks = await fetch(url);

    if (!oneBooks.ok) {
      throw new Error();
    }

    return await oneBooks.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
