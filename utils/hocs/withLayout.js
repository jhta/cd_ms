import React from 'react'
import Layout from '../../components/Layout'

const withLayout = BaseComponent => {
  const EnhacedComponent = props => (
    <Layout>
      <BaseComponent {...props} />
    </Layout>
  )

  EnhacedComponent.getInitialProps = async ctx => await BaseComponent.getInitialProps(ctx)
}


export default withLayout
