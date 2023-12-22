import { baseApi } from '../base';
import { User } from './interface';

const API_USER = '/api/user';

//使用base URL 和endpoints 定义服务
const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 查询使用者
    getUserData: builder.query<User, void>({
      query: () => API_USER,
      providesTags: ['User'],
      transformResponse: (response: { data: Promise<User> }) => {
        return response.data;
      },
    }),
  }),
  overrideExisting: false,
});
//导出可在函数式组件使用的hooks,它是基于定义的endpoints自动生成的
export const { useGetUserDataQuery } = userApi;

export default userApi;
