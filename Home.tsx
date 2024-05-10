import React, { useRef } from 'react'
import { SideBar } from '../layouts/SideBar'
import Event from '../components/Calendar/Event'
import { Header } from '../layouts/Header'

export const Home = () => {
    const eventRef = useRef() as any
    const setDisplaySideBar = () => {
        if(eventRef && eventRef.current) {
            eventRef.current.setDisplay()
        }
        console.log(eventRef)
    }
    return (
        <>
            <Header setDisplaySideBar={()=> setDisplaySideBar()} />
            <div style={{ display: 'flex' }}>
                <SideBar ref={eventRef} />
                <Event />
            </div>
        </>
    )
}
