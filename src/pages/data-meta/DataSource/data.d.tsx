// @ts-ignore
/* eslint-disable */

declare namespace API {
  type DataSourcePageParams = {
    current?: number;
    pageSize?: number;
  };

  type DataSourceListItem = {
    id?: string;
    name?: string;
    code?: string;
    host?: string;
    port?: number;
    database?: string;
    username?: string;
    password?: string;
    typeId?: string;
  };

  type DataSourcePageList = {
    data?: DataSourceListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };
}
