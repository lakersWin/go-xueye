import request from '../request';
import { ModifyVideoType, UploadVideoType } from '../types/video-type';

//上传视频信息
export const uploadVideoInfoAPI = (uploadVideo: UploadVideoType) => {
    return request.post('v1/video/info/upload', uploadVideo);
}

//获取视频状态
export const getVideoStatusAPI = (vid: number) => {
    return request.get('v1/video/status?vid=' + vid);
}

//修改视频信息
export const modifyVideoInfoAPI = (modifyVideo: ModifyVideoType) => {
    return request.post('v1/video/info/modify', modifyVideo);
}

//获取视频信息
export const getVideoInfoAPI = (vid: number) => {
    return request.get(`v1/video/get?vid=${vid}`);
}

//获取视频列表
export const getVideoListAPI = (page: number, pageSize: number, partition: number) => {
    return request.get(`v1/video/list?page=${page}&page_size=${pageSize}&partition=${partition}`);
}

//获取推荐视频列表
export const getRecommendedVideoAPI = (pageSize: number) => {
    return request.get(`v1/video/recommended?page_size=${pageSize}`);
}

// 搜索视频
export const searchVideoAPI = (page: number, pageSize: number, keywords: string) => {
    return request.get(`v1/video/search?page=${page}&page_size=${pageSize}&keywords=${keywords}`);
}

//提交审核
export const submitReviewAPI = (id: number) => {
    return request.post('v1/video/review/submit', { id });
}

//获取收藏夹内的视频
export const getCollectVideoAPI = (id: number, page: number, page_size: number) => {
    return request.get(`v1/video/collect?id=${id}&page=${page}&page_size=${page_size}`);
}

//获取我的视频
export const getUploadVideoAPI = (page: number, page_size: number) => {
    return request.get(`v1/video/upload/get?page=${page}&page_size=${page_size}`);
}

//通过用户ID获取视频
export const getVideoListByUidAPI = (uid: number, page: number, page_size: number) => {
    return request.get(`v1/video/user/get?uid=${uid}&page=${page}&page_size=${page_size}`);
}

//删除视频
export const deleteVideoAPI = (id: number) => {
    return request.post('v1/video/delete', { id });
}