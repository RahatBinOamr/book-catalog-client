import { api } from '../../app/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: builder => ({
    getBooks: builder.query({
      query: url => url,
      providesTags: ['book'],
    }),
    getSingleBook: builder.query({
      query: id => `/api/v1/books/${id}`,
      providesTags: ['book'],
    }),
    postBook: builder.mutation({
      query: data => ({
        url: `/api/v1/books/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['book'],
    }),
    postReview: builder.mutation({
      query: ({ id, reviews }) => ({
        url: `/api/v1/books/review/${id}`,
        method: 'POST',
        body: reviews,
      }),
    }),
    deleteBook: builder.mutation({
      query: id => ({
        url: `/api/v1/books/${id}`,
        method: 'DELETE',
      }),
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/books/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});
export const {
  useGetBooksQuery,
  usePostReviewMutation,
  useGetSingleBookQuery,
  usePostBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
} = bookApi;
