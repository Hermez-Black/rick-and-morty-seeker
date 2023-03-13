import Table from 'react-bootstrap/Table';

export default function Location({ locationData }) {

  const {name, type, dimension, residents} = locationData;

  return (
    <div className='tableContainer'>
      <Table borderless className='tableLocation'>
        <thead>
          <tr className='center'>
            <th>Nombre:</th>
            <th>Tipo:</th>
            <th>Dimension:</th>
            <th>Población:</th>
          </tr>
        </thead>
        <tbody>
          <tr className='center'>
            <td>{name ? name : "Desconocido"}</td>
            <td>{type ? type : "Desconocido"}</td>
            <td>{dimension ? dimension : "Desconocido"}</td>
            <td>{residents?.length ? residents?.length : "Desconocido"}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
