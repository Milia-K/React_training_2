import React, { Component } from 'react'
import ComponentTariff from './ComponentTariff'
import './Styles.css'

export class Container extends Component {
    render() {
        const tariffData = [
            {
                title: 'Безлимитный 300',
                price: '300 руб',
                description: 'До 10 Мбит/сек',
                text: 'Объем включенного трафика не ограничен',
                color: 'blue'
            },
            {
                title: 'Безлимитный 450',
                price: '450 руб',
                description: 'До 50 Мбит/сек',
                text: 'Объем включенного трафика не ограничен',
                color: 'green'
            },
            {
                title: 'Безлимитный 550',
                price: '550 руб',
                description: 'До 100 Мбит/сек',
                text: 'Объем включенного трафика не ограничен',
                color: 'red'
            },
            {
                title: 'Безлимитный 1000',
                price: '1000 руб',
                description: 'До 200 Мбит/сек',
                text: 'Объем включенного трафика не ограничен',
                color: 'black'
            },
        ];

    const tariffList = tariffData.map((tariff, index) => (
        <ComponentTariff
            key={index}
            title={tariff.title}
            price={tariff.price}
            description={tariff.description}
            text={tariff.text}
            color={tariff.color}
        />
    ));

    return (
    <div className='container' >
        {tariffList} 
    </div>
    )
  }
}

export default Container