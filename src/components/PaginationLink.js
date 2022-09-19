import * as React from 'react';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';



function Content() {
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
                style={{ color: "white" }}
                page={page}
                count={10}
                renderItem={(item) => (
                    <PaginationItem
                        style={{
                            color: "white",
                            fontWeight: "bold",
                        }}
                        component={Link}
                        to={`/jobs${item.page === 1 ? '' : `?page=${item.page}`}`}
                        {...item}
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
