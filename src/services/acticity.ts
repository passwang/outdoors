import { request } from './request'

export const getActivity = (params) => {
   return request('/api/activity/detail', params);
}