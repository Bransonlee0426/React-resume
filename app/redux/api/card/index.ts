import { baseApi } from '../base';
import { Card } from './interface';

const API_CARD = '/api/cards';

//使用base URL 和endpoints 定义服务
const cardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 查询列表
    getCardData: builder.query<Card, void>({
      query: () => API_CARD,
      providesTags: ['Card'],
      transformResponse: (response: { data: Promise<Card> }) => {
        return response.data;
      },
    }),
    // 根据id去查询,第一个参数是返回值的类型，第二个参是传递给后端的数据类型
    // getPostsById: builder.query<{ id: number; name: string }, number>({
    //   query: (id: number) => `/posts/${id}`,
    // }),
    // 创建帖子
    // createPosts: builder.mutation({
    //   query: (data) => ({
    //     url: '/posts',
    //     method: 'post',
    //     body: data,
    //   }),
    // }),
    // 根据id删除帖子
    // deletePostById: builder.mutation({
    //   query: (id: number) => ({
    //     url: `/posts/${id}`,
    //     method: 'delete',
    //   }),
    // }),
    // 根据id修改帖子
    // modifyPostById: builder.mutation({
    //   query: ({ id, data }: { id: number; data: any }) => ({
    //     url: `posts/${id}`,
    //     method: 'PATCH',
    //     body: data,
    //   }),
    // }),
  }),
  overrideExisting: false,
});
//导出可在函数式组件使用的hooks,它是基于定义的endpoints自动生成的
export const { useGetCardDataQuery } = cardApi;

export default cardApi;
