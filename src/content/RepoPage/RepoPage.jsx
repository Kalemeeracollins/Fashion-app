import React, { useState } from 'react';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableExpandHeader, TableHeader, TableBody, TableExpandRow, TableCell, TableExpandedRow} from 'carbon-components-react';
import RepoTable from './RepoTable';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Link, DataTableSkeleton,  Pagination} from 'carbon-components-react';
import { Language16 } from '@carbon/icons-react';

const REPO_QUERY = gql`
  query REPO_QUERY {
    
    organization(login: "carbon-design-system") {
    
      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        nodes {
          url
          homepageUrl
          issues(filterBy: { states: OPEN }) {
            totalCount
          }
          stargazers {
            totalCount
          }
          releases(first: 1) {
            totalCount
            nodes {
              name
            }
          }
          name
          updatedAt
          createdAt
          description
          id
        }
      }
    }
  }
  `;

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

const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={homepageUrl}>Homepage</Link>
      </li>
    )}
  </ul>
);

const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    key: row.id,
    stars: row.stargazers.totalCount,
    issueCount: row.issues.totalCount,
    createdAt: new Date(row.createdAt).toLocaleDateString(),
    updatedAt: new Date(row.updatedAt).toLocaleDateString(),
    links: <LinkList url={row.url} homepageUrl={row.homepageUrl} />,
  }));

  const RepoPage = () => {
    const [totalItems, setTotalItems] = useState(0);
    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [currentPageSize, setCurrentPageSize] = useState(10);  
  return <div className="bx--grig bx--grid--full-width bx--grid--no-gutter repo-page">
    <div className="bx--row repo-page--r1">
      <div className="bx--col-lg-16">
      <Query query={REPO_QUERY}>
  {({ loading, error, data }) => {
    // Wait for the request to complete
    if (loading) return 'Loading...';

    // Something went wrong with the data fetching
    if (error) return `Error! ${error.message}`;

    // If we're here, we've got our data!
    console.log(data.organization);

    return (
      <>
        <RepoTable headers={headers} rows={rows} />
      </>
    );
  }}
</Query>
      </div>
    </div>
  </div>;
};

export default RepoPage;