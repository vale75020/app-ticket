import React, { Component } from 'react'
import { Layout, Header, Navigation } from 'react-mdl'

export default class AdminLayout extends Component {
  render() {
    return (
      <div>
        {/* Always shows a header, even in smaller screens. */}
<div style={{height: '63px', position: 'relative', backgroundColor: "#e67e22", color: '#ddd'}}>
<Layout style={{ height: '64px', backgroundColor: "#e67e22", color: '#ddd'}} fixedHeader>
    <Header style={{backgroundColor: "#e67e22", color: '#ddd'}} title={<span><span style={{ color: '#ddd' }}>Prizoners / </span><strong>Welcome Username </strong></span>}>
        <Navigation>
            <a href="/newcard">Add Card</a>
            <a href="/">Sign Out</a>
        </Navigation>
    </Header>
</Layout>
</div>
      </div>
    )
  }
}
