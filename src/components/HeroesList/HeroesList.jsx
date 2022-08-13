import { useState } from 'react';
import { useFetchSuperherosQuery } from '../../redux/superheroApiSlice';
import TablePagination from '@mui/material/TablePagination';
import { PaginationContainer, HeroImage, ListItem, HeroNickname, List, Section } from './HeroesList.styled';
import { NavLink, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';



export default function HeroesList() {
    const [page, setPage] = useState(1);
    const [heroesPerPage, setHeroesPerPage] = useState(5);
    const [paginationPage, setPaginarionPage] = useState(0);
    const {data: heroes, isLoading } = useFetchSuperherosQuery(page);
    const location = useLocation();
    
    const totalHeroCount = heroes?.data.heroCount;
    const imageStore = "http://localhost:3001/static/";

    const handleChangePage = (e, newPage) => {
        setPaginarionPage(newPage)
        setPage(newPage + 1)
    };
    
    const handleChangeRowsPerPage = event => {
        setHeroesPerPage(parseInt(event.target.value))
        setPaginarionPage(0)
        paginationPage(1)
    };

    
    return (
        <>
            {isLoading && <Loader />}
            <Section>
                <List>
                    {heroes?.data.result.map(hero => {
                        const heroSrc = hero.image;
                        let imageSrc = imageStore;
                        imageSrc += heroSrc;

                        return (
                            <ListItem key={hero._id}>
                                <NavLink to={`/superheroes/${hero._id}`} state={{ from: location }} style={{ textDecoration: 'none' }}>
                                    <HeroImage src={imageSrc} alt="hero" />
                                    <HeroNickname>{hero.nickname}</HeroNickname>
                                </NavLink>
                            </ListItem>
                        )
                    })}
                </List>
            
                <PaginationContainer>
                    <TablePagination
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: 'white',
                            marginLeft: '15px',
                        }}
                        component="div"
                        rowsPerPageOptions={[5]}
                        count={totalHeroCount}
                        rowsPerPage={heroesPerPage}
                        page={paginationPage}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </PaginationContainer>
            </Section>
        </>
    );
};