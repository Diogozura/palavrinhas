import * as React from 'react';
import dynamic from 'next/dynamic';
import { Carregando } from '@/src/common/Carregando';



const Footer = dynamic(
  () => import('./Footer'),
  { loading: () => <p>Loading ...</p>, ssr: true }
)
const Topo = dynamic(
  () => import('./header'),
  { loading: () => <p>Loading ...</p>, ssr: true }
)
const PremisionCookie = dynamic(
  () => import('@/src/componensts/Base/permisonCookie'),
  { loading: () => <Carregando />, ssr: true }
)
export default function BaseSite({ children }:any) {

  return (
    <>
      <Topo />
      <PremisionCookie ctx={undefined} />
      {children}
      <hr/>
        <Footer />
    </>
  );
}