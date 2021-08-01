import { useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar.component'
import Content from './components/Content/Content.component'
import CreateModal from './components/Modal/Create/Create-Modal.component'
import EditModal from './components/Modal/Edit/Edit-Modal.component'
import AssignModal from './components/Modal/Assign/Assign-Modal.component'
import { connect } from 'react-redux';
import { fetchTicketDataStart } from './Redux/tickets/ticket.actions'
import { fetchUserDataStart } from './Redux/users/user.actions'


function App({ fetchTicketDataStart, fetchUserDataStart }) {

  useEffect(() => {
      fetchTicketDataStart();
      fetchUserDataStart();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="App">
      <CreateModal />
      <EditModal />
      <AssignModal />
      <Navbar />
      <Content />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchTicketDataStart: () => dispatch(fetchTicketDataStart()),
  fetchUserDataStart: () => dispatch(fetchUserDataStart())
})

export default connect(null, mapDispatchToProps)(App);
