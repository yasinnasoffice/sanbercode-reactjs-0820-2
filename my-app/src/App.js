import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <table class="table" align="center">
        <thead>
          <tr>
            <th colSpan="2" text-align="center">Form Pembelian Buah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nama Pelanggan :</td>
            <td align="left"><input type="text" width="10"></input></td>
          </tr>
          <tr>
            <td align="left">Daftar Item</td>
            <td align="left">
              <input type="checkbox"></input>
              <label>Semangka</label><br/>
              <input type="checkbox"></input>
              <label>Jeruk</label><br/>
              <input type="checkbox"></input>
              <label>Nanas</label><br/>
              <input type="checkbox"></input>
              <label>Salak</label><br/>
              <input type="checkbox"></input>
              <label>Anggur</label>
            </td>
          </tr>
          <tr>
          <th colSpan="2" align="left"> <input type="submit" value="Kirim"></input></th>
          </tr>

        </tbody>
      </table>
    </div>
  );
}



export default App;


