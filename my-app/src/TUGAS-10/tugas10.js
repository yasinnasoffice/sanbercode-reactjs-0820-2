import React, { Component } from 'react';



let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

 class AnekaBuah extends React.Component {
   render () {
     return (
       <>
       {dataHargaBuah.map(el=> {
         return (
<div className="AnekaBuah">
          <table class="TableBuah" align="center">
            <thead>
              <tr>
                <td colSpan="3" text-align="center"><h2>Tabel Harga Buah</h2></td>
              </tr>
              <tr>
                <td>{el.Nama}</td>
                <td>{el.Harga}</td>
                <td>{el.Berat}</td>
              </tr>
              <tr>
                <td>Semangka</td>
                <td>10000</td>
                <td>1 Kg</td>
              </tr>
              <tr>
                <td>Anggur</td>
                <td>40000</td>
                <td>0.5 Kg</td>
              </tr>
              <tr>
                <td>Strawbery</td>
                <td>30000</td>
                <td>0.4 Kg</td>
              </tr>
              <tr>
                <td>Jeruk</td>
                <td>30000</td>
                <td>1 Kg</td>
              </tr>
              <tr>
                <td>Mangga</td>
                <td>30000</td>
                <td>0.5 Kg</td>
              </tr>
            </thead>
          </table>
        </div>


         )
       } )}
       </>
     )
   }
 }

 export default AnekaBuah;