import { Table } from 'antd';
import 'antd/dist/antd.min.css';
import { columns, data } from './dataSource';

function App() {
  return <Table dataSource={data} columns={columns} pagination={false} />;
}

export default App;
