import { Table } from 'antd';
import 'antd/dist/antd.min.css';
import { columns, data } from './dataSource';

function App() {
  return <Table dataSource={data} columns={columns} pagination={false} />;
}

const onSubmit = async e => {
    e.preventDefault();
    
    const post = {Data,Title}
    const res = await fetch('/add-table',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(post),
    })
    const response = await res.json()
    console.log(response['tableData'])
    setTable(response['tableData'])
    
  }
    return (
    <div className="card">
      <div className="card-body">
        <form action='add-table' onSubmit={e => onSubmit(e)} method='post' className="post">
          <input name='tableName' onChange={(e)=>setTitle(e.target.value)} value={Title}></input>
          <textarea value={Data} onChange={(e)=>setData(e.target.value)} name='data' rows="5" className="form-control"></textarea>
          <button type="submit" className="btn btn-success mt-2">Render CSV</button>
        </form>
        <div className='mt-4'>
          {!Table ? ('No table data found'):(
            <Datatable data={Table}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App