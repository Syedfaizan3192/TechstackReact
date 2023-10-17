import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'rsuite';
import { Input, InputGroup, Grid, Row, Col } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { getAllData } from '../services/data';

const { Column, HeaderCell, Cell } = Table;
const demoData = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        price: 29.99,
        available_stock: 100,
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 19.99,
        available_stock: 75,
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3',
        price: 39.99,
        available_stock: 50,
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Description of Product 4',
        price: 49.99,
        available_stock: 30,
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'Description of Product 5',
        price: 24.99,
        available_stock: 90,
    },
    {
        id: 6,
        name: 'Product 6',
        description: 'Description of Product 6',
        price: 34.99,
        available_stock: 60,
    },
    {
        id: 7,
        name: 'Product 7',
        description: 'Description of Product 7',
        price: 59.99,
        available_stock: 20,
    },
    {
        id: 8,
        name: 'Product 8',
        description: 'Description of Product 8',
        price: 22.99,
        available_stock: 70,
    },
    {
        id: 9,
        name: 'Product 9',
        description: 'Description of Product 9',
        price: 15.99,
        available_stock: 110,
    },
    {
        id: 10,
        name: 'Product 10',
        description: 'Description of Product 10',
        price: 44.99,
        available_stock: 40,
    },
    {
        id: 11,
        name: 'Product 11',
        description: 'Description of Product 11',
        price: 49.99,
        available_stock: 25,
    },
    {
        id: 12,
        name: 'Product 12',
        description: 'Description of Product 12',
        price: 34.99,
        available_stock: 80,
    },
    {
        id: 13,
        name: 'Product 13',
        description: 'Description of Product 13',
        price: 18.99,
        available_stock: 95,
    },
    {
        id: 14,
        name: 'Product 14',
        description: 'Description of Product 14',
        price: 28.99,
        available_stock: 45,
    },
    {
        id: 15,
        name: 'Product 15',
        description: 'Description of Product 15',
        price: 38.99,
        available_stock: 55,
    },
    {
        id: 16,
        name: 'Product 16',
        description: 'Description of Product 16',
        price: 64.99,
        available_stock: 15,
    },
    {
        id: 17,
        name: 'Product 17',
        description: 'Description of Product 17',
        price: 26.99,
        available_stock: 75,
    },
    {
        id: 18,
        name: 'Product 18',
        description: 'Description of Product 18',
        price: 14.99,
        available_stock: 120,
    },
    {
        id: 19,
        name: 'Product 19',
        description: 'Description of Product 19',
        price: 54.99,
        available_stock: 35,
    },
    {
        id: 20,
        name: 'Product 20',
        description: 'Description of Product 20',
        price: 19.99,
        available_stock: 85,
    },
];

const DashboardTable = () => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [tableData, setTableData] = useState([]);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = tableData.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });

    const styles = {
        marginBottom: 10
    };
    useEffect(() => {
        setTimeout(() => {
            setKeyword(searchTerm)
        }, 250);

    }, [searchTerm]);

    useEffect(() => {
        GetSData()
    }, [keyword])

    const GetSData = async () => {
        const params = {
            search: keyword
        }
        const response = await getAllData(params)
        const res_data = response?.data?.data
        setTableData(res_data)
    }

    const CustomInput = ({ ...props }) => <Input {...props} style={styles}
        value={keyword}
        onChange={(e) => setSearchTerm(e)}
    />;
    return (
        <div className='container mt-5'>
            <Row>
                <Col xs={24} sm={12} md={8}>
                    <CustomInput size="lg" placeholder="Serach" />
                </Col>
            </Row>
            <div className='container mt-5'>
                <Table height={420} data={data}>
                    <Column width={50} align="center" fixed>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id" />
                    </Column>

                    <Column width={100} fixed>
                        <HeaderCell>Name</HeaderCell>
                        <Cell dataKey="name" />
                    </Column>

                    <Column width={100}>
                        <HeaderCell>Description</HeaderCell>
                        <Cell dataKey="description" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Price</HeaderCell>
                        <Cell dataKey="price" />
                    </Column>
                    <Column width={200} flexGrow={1}>
                        <HeaderCell>Available Stock</HeaderCell>
                        <Cell dataKey="available_stock" />
                    </Column>
                </Table>
                <div style={{ padding: 20 }}>
                    <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        maxButtons={5}
                        size="xs"
                        layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                        total={demoData.length}
                        limitOptions={[10, 30, 50]}
                        limit={limit}
                        activePage={page}
                        onChangePage={setPage}
                        onChangeLimit={handleChangeLimit}
                    />
                </div>
            </div>

        </div>
    );
};

export default DashboardTable