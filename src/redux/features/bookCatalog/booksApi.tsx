import { api } from '../../app/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: builder => ({
    getBooks: builder.query({
      query: url => url,
      providesTags: ['book'],
    }),
    getSingleBook: builder.query({
      query: id => `/${id}`,
      providesTags: ['book'],
    }),
    postBook: builder.mutation({
      query: data => ({
        url: `/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['book'],
    }),
    postReview: builder.mutation({
      query: ({ id, reviews }) => ({
        url: `/review/${id}`,
        method: 'POST',
        body: reviews,
      }),
    }),
    deleteBook: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
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
