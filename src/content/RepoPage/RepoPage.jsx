import React, { useState } from 'react';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableExpandHeader, TableHeader, TableBody, TableExpandRow, TableCell, TableExpandedRow} from 'carbon-components-react';
import RepoTable from './RepoTable';
import { Link, DataTableSkeleton,  Pagination} from 'carbon-components-react';
import { Language16 } from '@carbon/icons-react';

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

const rows = [
  {
    id: '1',
    name: 'Repo 1',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '2',
    name: 'Repo 2',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '3',
    name: 'Repo 3',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
];

const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    key: row.id,
    stars: row.stargazers.totalCount,
    issueCount: row.issues.totalCount,
    createdAt: new Date(row.createdAt).toLocaleDateString(),
    updatedAt: new Date(row.updatedAt).toLocaleDateString(),
    
  }));

  const RepoPage = () => {
    const [totalItems, setTotalItems] = useState(0);
    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [currentPageSize, setCurrentPageSize] = useState(10);  
    return (
      <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
        <div className="bx--row repo-page__r1">
          <div className="bx--col-lg-16"><RepoTable headers={headers} rows={rows} /></div>
        </div>
      </div>
    );
};

export default RepoPage;