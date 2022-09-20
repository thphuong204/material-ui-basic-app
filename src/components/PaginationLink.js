import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


function Content({ handlePageArrayData }) {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: 'center',
                marginTop: "20px",
            }}>
            <Pagination
                page={page}
                count={3}
                renderItem={(item) => (
                    <PaginationItem
                        style={{
                            fontWeight: "bold",
                        }}
                        component={Link}
                        to={`/jobs${item.page === 1 ? '' : `?page=${item.page}`}`}
                        {...item}
                        onClick={(e) => handlePageArrayData(e)}
                    />
                )}
            />
        </div>
    );
}

export default function PaginationLink() {
    return (
        <Content />

    );
}
