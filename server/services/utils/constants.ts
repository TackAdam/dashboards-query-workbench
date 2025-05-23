/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const SQL_TRANSLATE_ROUTE = `/_plugins/_sql/_explain`;
export const PPL_TRANSLATE_ROUTE = `/_plugins/_ppl/_explain`;
export const SQL_QUERY_ROUTE = `/_plugins/_sql`;
export const PPL_QUERY_ROUTE = `/_plugins/_ppl`;
export const FORMAT_CSV = `format=csv`;
export const FORMAT_TEXT = `format=raw`;
export const SPARK_SQL_QUERY_ROUTE = `/_plugins/_async_query`;
export const DATASOURCES_GET_QUERY = `/_plugins/_query/_datasources`;

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'User-Agent': 'OpenSearch-Dashboards',
};

export const CLUSTER = {
  ADMIN: 'admin',
  SQL: 'opensearch-sql',
  DATA: 'data',
};
