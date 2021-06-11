import React from 'react'

import Sidebar from '../utils/sidebar'
import Content from '../utils/content'

export default function Layout(props){
    return (
        <main>
            <Sidebar {...props}/>
            <Content>
                {props.children}
            </Content>
        </main>
    )
}