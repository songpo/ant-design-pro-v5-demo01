import { request } from 'umi';

/** 新建数据源 POST /api/gateway/meta-data/datasource/create */
export async function add(options?: { [key: string]: any }) {
  return request<API.DataSourceListItem>('/api/gateway/meta-data/datasource/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/gateway/meta-data/datasource/remove */
export async function remove(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/gateway/meta-data/datasource/remove', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/gateway/meta-data/datasource/modify */
export async function update(options?: { [key: string]: any }) {
  return request<API.DataSourceListItem>('/api/gateway/meta-data/datasource/modify', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function list(
  params: {
    // query
    /** 当前的页码 */
    name?: string;
    /** 页面的容量 */
    code?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.DataSourceListItem[]>('/api/gateway/meta-data/datasource/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/gateway/meta-data/datasource/page */
export async function page(params: API.DataSourcePageParams, options?: { [key: string]: any }) {
  return request<API.DataSourcePageList>('/api/gateway/meta-data/datasource/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
