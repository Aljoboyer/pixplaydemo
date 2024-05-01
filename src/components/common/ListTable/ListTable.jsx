import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const ListTable = ({ columns, data, totalCount, handlePageChange , defaultPage}) => {
  const [loading, setLoading] = useState(false);
  return (
    <DataTable
      columns={columns}
      data={data}
      progressPending={loading}
    //   paginationPerPage={10}
    //   pagination
    //   paginationServer
    //   paginationTotalRows={totalCount}
    //   onChangePage={handlePageChange}
      striped
      responsive={true}
    //   paginationDefaultPage={defaultPage}
    
    />
  );
};

export default ListTable;
