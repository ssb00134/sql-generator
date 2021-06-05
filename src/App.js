import './App.css';
import FlexDiv, { FlexDivItem } from './components/common/FlexDiv';
import Tab from './components/tabs/Tab';
import Template from './components/template/Template';
import ColumnForm from './container/ColumnForm';
import ConditionForm from './container/ConditionForm';
import TableContainer from './container/TableContainer';

function App() {
  return (
    <FlexDiv >
      <FlexDivItem>
        <ColumnForm />
        <TableContainer />
        <ConditionForm />
      </FlexDivItem>
      <FlexDivItem color="blue">
        <Tab></Tab>
      </FlexDivItem>
    </FlexDiv>
  );
}

export default App;
