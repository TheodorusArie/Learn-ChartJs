import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import { fetchData, inputDataPokemon } from './store/actions/pokemonActions';
import Chart from 'chart.js'

function App() {
  const dispatch = useDispatch()
  let myChart = true;
  let ctx = 'myChart';
  const { pokemon, pokemonData, type, typeCountList, typeList } = useSelector(state => state.pokemon)
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  useEffect(() => {
    if (pokemon.length > 0) {
      dispatch(inputDataPokemon(pokemon))
    }
  }, [pokemon])

  useEffect(() => {
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: typeList,
        datasets: [{
          label: '# of Votes',
          data: typeCountList,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }, [])




  useEffect(() => {
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: typeList,
        datasets: [{
          label: '# of Votes',
          data: typeCountList,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }, [typeCountList])







  return (
    <>
      <h1>HAHAHAH</h1>
      {
        pokemonData.length > 0 && JSON.stringify(typeCountList)
      }
      <div style={{ width: 800, height: 800 }}>
        <canvas id="myChart"></canvas>
      </div>
    </>
  );
}

export default App;
