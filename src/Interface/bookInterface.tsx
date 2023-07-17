export interface IBook {
  _id?: string;
  imgUrl: string;
  title: string;
  author: {
    name: string;
    img: string;
  };
  genre: string;
  publicationDate: string;
  review?: string;
}
export interface IId {
  id: string;
}
export interface IReview {
  review: string | void;
  _id?: string;
}
