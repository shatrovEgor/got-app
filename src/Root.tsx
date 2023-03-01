import React from 'react';
import './App.css';
import Header from './components/Header';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/query-core';
import FilltredModule from './components/FilltredModule';
import PaginationModule from './components/PaginationModule';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient();

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header />
        <FilltredModule />
        {/* <MainBoard /> */}
        <Outlet />
        <PaginationModule />
      </div>
    </QueryClientProvider>
  );
}

export default Root;
