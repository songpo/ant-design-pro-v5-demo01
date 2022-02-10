import type { Request, Response } from 'express';

const dataSourceList = [
  {
    id: '1',
    host: '10.10.10.5',
    port: '3306',
    username: 'root',
    password: '123456',
    database: 'test',
    typeId: '1',
    key: '1',
  },
];

function create(req: Request, resp: Response) {
  const params = req.query as any;
  console.log('Create dataSource', params);

  const id = new Date().getTime().toString();

  dataSourceList.push({
    id: id,
    host: params.host,
    port: params.port,
    username: params.username,
    password: params.password,
    database: params.database,
    typeId: params.typeId,
    key: id,
  });

  return resp.json({
    success: true,
    code: 1000,
    msg: '',
    data: [],
  });
}

function getDataSourcePage(req: Request, resp: Response) {
  const params = req.query as any;
  console.log('getDataSourcePage', params);

  return resp.json({
    success: true,
    code: 1000,
    msg: '',
    data: dataSourceList,
  });
}

export default {
  'GET /api/gateway/meta-data/datasource/page': getDataSourcePage,
  'POST /api/gateway/meta-data/datasource/create': create,
};
