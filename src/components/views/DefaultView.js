import React from 'react'
import { Link } from '@reach/router'

import Layout from '../layout/Layout'

const DefaultView = () => {
    return (
        <Layout>
            <p>Uh-oh! I couldn't find that page.</p>
            <p><Link to="/">Go back to home</Link></p>
        </Layout>
    )
}

export default DefaultView