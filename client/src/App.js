import './App.css'

import { Table } from 'antd'

import 'antd/dist/antd.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App () {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const res = await axios.get('/users')
    setUsers(res.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'name'
    }
  ]

  return (
    <div className='App'>
      <Table
        dataSource={users}
        columns={columns}
      />
    </div>
  )
}

export default App
