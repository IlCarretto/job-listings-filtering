import React, {useEffect, useState} from 'react';
import "./styles/styles";
import { ClearButton, Container, FilterBox, Header, Main, theme } from './styles/styles';
import { ThemeProvider } from "styled-components";
import { Item } from './type';
import CardItem from './CardItem';

function App() {
  const [data, setData] = useState<Item[]>([]);
  const [currentFilters, setCurrentFilters] = useState<string[]>([]);

  const filteredItems = data.filter((item) => {
    return currentFilters.every((filter) =>
      item.languages.includes(filter) ||
      item.tools.includes(filter) ||
      item.role.includes(filter) ||
      item.level.includes(filter)
    );
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch("/data.json");
        const jsonData = await resp.json();
        setData(jsonData);
      } catch (err) {
        console.error(err);
      }
    } 
    getData();
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header/>
        <Main>
          <Container>
            {currentFilters.length > 0 && (
              <FilterBox>
                <ul>
                {currentFilters.map((card, i) => (
                  <li key={i}>
                    <div>{card}</div>
                    <button onClick={() => setCurrentFilters((prevFilters) => prevFilters.filter((f) => f != card))}>
                      <img src="/icon-remove.svg" alt="Remove Filter" />
                    </button>
                  </li>
                ))}
                </ul>
                <ClearButton onClick={() => setCurrentFilters([])}>Clear</ClearButton>
              </FilterBox>
            )}
            <div className={`cards-container ${currentFilters.length > 0 && 'mt-1'}`}>
            {currentFilters.length > 0 ? (
              filteredItems.map((card) => {
                return (
                  <CardItem key={card.id} dataCard={card} currentFilters={currentFilters} setCurrentFilters={setCurrentFilters}/>
                )
              })
            ) : (
              data.map((card) => {
                return (
                  <CardItem key={card.id} dataCard={card} currentFilters={currentFilters} setCurrentFilters={setCurrentFilters}/>
                )
              })
            )}
            </div>
          </Container>
        </Main>

      </ThemeProvider>
    </div>
  );
}

export default App;
