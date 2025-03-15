import React from 'react'
import { LanguageProvider } from './src/contexts/LanguageContext'
import './src/main.scss'
import 'bootstrap/dist/js/bootstrap.min.js'
import "@fontsource/league-gothic"; // Defaults to weight 400.

export const wrapRootElement = ({ element }) => <LanguageProvider>{element}</LanguageProvider>
