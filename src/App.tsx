import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { gotService } from './services/api';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/query-core';
import FilltredModule from './components/FilltredModule';
import MainBoard from './components/MainBoard';
import PaginationModule from './components/PaginationModule';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header />
        <FilltredModule />
        <MainBoard />
        <PaginationModule />
      </div>
    </QueryClientProvider>
  );
}

export default App;
