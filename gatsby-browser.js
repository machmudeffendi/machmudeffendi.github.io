import React from 'react'

import "./src/style/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from './src/components/contents/layout'

export function wrapPageElement({ element, props }){
    return <Layout {...props}>{element}</Layout>
}