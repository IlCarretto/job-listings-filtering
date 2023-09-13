import React from 'react'
import { Item } from './type'
import "./styles/styles";
import { Card } from './styles/styles';

interface IProps {
    dataCard: Item;
    currentFilters: string[];
    setCurrentFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const CardItem = ({dataCard, setCurrentFilters, currentFilters}: IProps) => {

    const handleAddFilters = (filter: string) => {
        if (!currentFilters.includes(filter)) {
            setCurrentFilters([...currentFilters, filter]);
        }
    }

    const { logo, company, new: isNew, featured, position, postedAt, contract, location, languages, tools, role, level } = dataCard;

  return (
    <Card>
        <div className="card-top">
            <div className="image">
            <img src={logo} alt={company} />
            </div>
            <div className="content">
            <div className="title">
                <h4>{company}</h4>
                {isNew && <span className="new">NEW!</span>}
                {featured && <span className="featured">FEATURED</span>}
            </div>
            <h4>{position}</h4>
            <ul>
                <li>{postedAt}</li>
                <li>{contract}</li>
                <li>{location}</li>
            </ul>
            </div>
        </div>
        <div className="card-bottom">
            <ul>
            {languages.map((lang, i) => (
                <li key={i}>
                <button onClick={() => handleAddFilters(lang)}>{lang}</button>
                </li>
            ))}
            {tools.map((tool, i) => (
                <li key={i}>
                <button onClick={() => handleAddFilters(tool)}>{tool}</button></li>
            ))}
            <li><button onClick={() => handleAddFilters(role)}>{role}</button></li>
            <li><button onClick={() => handleAddFilters(level)}>{level}</button></li>
            </ul>
        </div>
    </Card>
  )
}

export default CardItem