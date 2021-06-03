import './App.css';
import FlexDiv from './components/common/FlexDiv';
import Tab from './components/tabs/Tab';
import Template from './components/template/Template';
import ColumnForm from './container/ColumnForm';
import ConditionForm from './container/ConditionForm';

function App() {
  return (
    <FlexDiv>
      <Template>
        <ColumnForm></ColumnForm>
        <ConditionForm></ConditionForm>
      </Template>
      <Template color="blue">
        <Tab></Tab>
      </Template>
    </FlexDiv>
  );
}

export default App;
