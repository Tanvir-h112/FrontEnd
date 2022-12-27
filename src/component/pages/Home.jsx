import React from 'react'
import Layout from "../input-group/layout/Layout";
import Section from "../section/Section"


const items = [
    'items 1',
    'items 2',
    'items 3'
]
const experiences = [
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos assumenda, magni saepe natus perspiciatis neque laudantium facere omnis id aspernatur molestiae debitis! Aperiam ratione, pariatur odio dolorem doloribus sint.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos assumenda, magni saepe natus perspiciatis neque laudantium facere omnis id aspernatur molestiae debitis! Aperiam ratione, pariatur odio dolorem doloribus sint.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos assumenda, magni saepe natus perspiciatis neque laudantium facere omnis id aspernatur molestiae debitis! Aperiam ratione, pariatur odio dolorem doloribus sint.`
]
const educations = [
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos assumenda, magni saepe natus perspiciatis neque laudantium facere omnis id aspernatur molestiae debitis! Aperiam ratione, pariatur odio dolorem doloribus sint.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos assumenda, magni saepe natus perspiciatis neque laudantium facere omnis id aspernatur molestiae debitis! Aperiam ratione, pariatur odio dolorem doloribus sint.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos assumenda, magni saepe natus perspiciatis neque laudantium facere omnis id aspernatur molestiae debitis! Aperiam ratione, pariatur odio dolorem doloribus sint.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos assumenda, magni saepe natus perspiciatis neque laudantium facere omnis id aspernatur molestiae debitis! Aperiam ratione, pariatur odio dolorem doloribus sint.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dignissimos assumenda, magni saepe natus perspiciatis neque laudantium facere omnis id aspernatur molestiae debitis! Aperiam ratione, pariatur odio dolorem doloribus sint.`
]
function Home(){
    return (
        <Layout>
            <Section title='Test Section'  items={educations}/>
            <Section title='Experiences' items={experiences} />
            <Section title='Educations' items={educations}/>  
        </Layout>
    )
}

export default Home;