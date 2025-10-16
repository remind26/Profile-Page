import React from 'react';
import { createRoot } from 'react-dom/client';
import ProfilePage from './components/ProfilePage';
import './styles/styles.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ProfilePage />);