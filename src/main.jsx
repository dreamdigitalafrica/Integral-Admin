import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import AdminApp from './admin/AdminApp';
import './base.css';
import './assets/css/control-spacing.css';

createRoot(document.getElementById('root')).render(<BrowserRouter><Routes><Route path="/admin/*" element={<AdminApp/>}/><Route path="*" element={<Navigate to="/admin" replace/>}/></Routes></BrowserRouter>);
