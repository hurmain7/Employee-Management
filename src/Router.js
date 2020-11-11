import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeCreate from './Components/EmployeeCreate';
import EmployeeEdit from './Components/EmployeeEdit';

const RouterComponent = () => {
  return (
      <Router>
        <Scene key="root" hideNavBar headerLayoutPreset="center" >
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Manager Login" />
          </Scene>
          <Scene key="main">
            <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="My Employees"
            initial
            />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
          </Scene>
        </Scene>
      </Router>

  );
};

export default RouterComponent;
