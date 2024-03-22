import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

type Clients = {
    clients: string[]
}

const Clients = ({clients}: Clients) => {

    const total = clients?.length

    const clientIteration = (arrStart: number, arrEnd: number) => {
       const JSX = clients?.slice(arrStart, arrEnd).map((client, index)=>(
            <span key={index} className={styles._image}><Image priority alt={`${client} Logo`} src={`/resources/clients/${client}.svg`} fill/></span>
        ));
        return JSX
    }

    return (
        <>
        <div className={styles._topLine}>{clientIteration(0, total / 2)}{clientIteration(0, total / 2)}</div>
        <div className={styles._bottomLine}>{clientIteration(total / 2, total)}{clientIteration(total / 2, total)}</div>
        </>
    )
}

export default Clients
