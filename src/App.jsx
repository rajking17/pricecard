import React from 'react'
import Card from './component/Card'

function App() {
  const data = [
    {
      planName: 'FREE',
      price: 0,
      users: 'Single User',
      isUsers: true,
      storage: 50,
      isStorage: true,
      publicProject: 'Unlimited Public Projects',
      isPublicProject: true,
      access: 'Community Access',
      isAcess: true,
      privateProject: 'Unlimited Private Projects',
      isPrivateProject: false,
      support: 'Dedicated Phone Support',
      isSupport: false,
      domain: 'Free Subdomain',
      isDomain: false,
      status: 'Monthly Status Report',
      isStatus: false 
    },
    {
      planName: 'PLUS',
      price: 9,
      users: '5 Users',
      isUsers: true,
      storage: 50,
      isStorage: true,
      publicProject: 'Unlimited Public Projects',
      isPublicProject: true,
      access: 'Community Access',
      isAcess: true,
      privateProject: 'Unlimited Private Projects',
      isPrivateProject: true,
      support: 'Dedicated Phone Support',
      isSupport: true,
      domain: 'Free Subdomain',
      isDomain: true,
      status: 'Monthly Status Report',
      isStatus: false
    },
    {
      planName: 'PRO',
      price: 49,
      users: 'Unlimited Users',
      isUsers: true,
      storage: 50,
      isStorage: true,
      publicProject: 'Unlimited Public Projects',
      isPublicProject: true,
      access: 'Community Access',
      isAcess: true,
      privateProject: 'Unlimited Private Projects',
      isPrivateProject: true,
      support: 'Dedicated Phone Support',
      isSupport: true,
      domain: 'Free Subdomain',
      isDomain: true,
      status: 'Monthly Status Report',
      isStatus: true
    }
  ]
  return (
    <>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e, i)=> {
          return <Card data={e} key={i}/>
        })
      }
    </div>
  </div>
</section>
    </>
  )
}

export default App
