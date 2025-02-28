import React from 'react';
import { useContext } from 'react';

import './Canvas.css';
import Diagram from './Diagram/Diagram';
import Script from './Script/Script';
import DUMMY_DATA from '../../assets/CanvasDiagramMummyData';
import store from '../context/store';

const Canvas = ({ activeTab }) => {
  const ctx = useContext(store);
  console.log(ctx.uploadedData, activeTab);
  return (
    <section className="canvas">
      <Script activeTab={activeTab} />
      <Diagram tables={DUMMY_DATA || []} activeTab={activeTab} />
    </section>
  );
};

export default Canvas;
