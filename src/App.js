import './App.css';
import { Card } from './components/Card';
import arrayPDVS from './infoData/arrayPDVS.js';


const infoProducts = [
  {
    idPDV: 1,
    namePDV: 'AVENIDA CIRCUNVALAR',
    products: {
      id: 1,
      name: 'Fresas',
      state: true,
      classification: 'soldOut'
    }
  },
  {
    idPDV: 1,
    namePDV: 'AVENIDA CIRCUNVALAR',
    products: {
      id: 1,
      name: 'Pan',
      state: true,
      classification: 'soldOut'
    }
  },
  // {
  //   idPDV: 1,
  //   namePDV: 'AVENIDA CIRCUNVALAR',
  //   products: {
  //     id: 1,
  //     name: 'Huevo',
  //     state: true,
  //     classification: 'soldOut'
  //   }
  // },
  // {
  //   idPDV: 1,
  //   namePDV: 'AVENIDA CIRCUNVALAR',
  //   products: {
  //     id: 1,
  //     name: 'Arroz',
  //     state: true,
  //     classification: 'soldOut'
  //   }
  // },
  // {
  //   idPDV: 1,
  //   namePDV: 'AVENIDA CIRCUNVALAR',
  //   products: {
  //     id: 1,
  //     name: 'Chicharrines',
  //     state: true,
  //     classification: 'suggest'
  //   }
  // },
  {
    idPDV: 2,
    namePDV: 'ARMENIA',
    products: {
      id: 1,
      name: 'Chicharrines',
      state: true,
      classification: 'suggest'
    },
  },
  {
    idPDV: 2,
    namePDV: 'AVENIDA 30 DE AGOSTO',
    products: {
      id: 1,
      name: 'Aguacate',
      state: true,
      classification: 'suggest'
    },
  },
]

function App() {
  const PDVS = arrayPDVS

  return (
    <div >
      {/* <header>SAYONARA</header> */}
      <div className='cardContend'>

        {PDVS.map(PDV => (
          infoProducts.map(product => (
            (product.namePDV === PDV) ?
              <Card infoProducts={infoProducts.filter(product => product.namePDV === PDV)} /> :
              null
          ))
        ))}
      </div>
    </div>
  );
}

export default App;
