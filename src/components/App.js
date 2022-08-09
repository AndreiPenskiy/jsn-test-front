import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader/Loader';

const HeroesList = lazy(() => import('./HeroesList/HeroesList'));
const AppBar = lazy(() => import('./AppBar/AppBar'));
const AddHero = lazy(() => import('./AddHero/AddHero'));
const HeroDetails = lazy(() => import('./HeroDetails/HeroDetails'));
const UpdateHero = lazy(() => import('./UpdateHero/UpdateHero'));


function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AppBar />
        
        <Routes>
            <Route>
            <Route index element={<HeroesList/>}/>
            <Route path="add" element={<AddHero />} />
            <Route path="superheroes/:id/" element={<HeroDetails />} />
            <Route path="superheroes/:id/update/" element={<UpdateHero />} />
            <Route path="*" element={<Navigate to="/" />} />
            </Route>
           </Routes>

      </Suspense>
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </>
    );
}

export default App;