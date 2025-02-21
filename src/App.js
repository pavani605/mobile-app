
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SuperAdminDashboard from './Dashboard/SuperAdminDashboard';
import Package from './Dashboard/Package';
import './App.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Roles from './UserManagement/Roles';
import Users from './UserManagement/Users';
import AccessRole from './UserManagement/AccessRole';
import AditLog from './UserManagement/AditLog';
import RolePrivileges from './UserManagement/RolePrivileges';
import Zone from './Locations/Zone';
import ZoneCharge from './Locations/ZoneCharge';
import LocationCategory from './Locations/LocationCategory';
import Location from './Locations/Location';
import Trips from './Locations/Trips';
import MyCompany from './Subscription/MyCompany';
import MyUsage from './Subscription/MyUsage';
import MyCharts from './Subscription/MyCharts';
import TaxServiceCodes from './Subscription/TaxServiceCodes';
import ComissionReport from './Subscription/ComissionReport';
import UserLoginHistory from './Subscription/UserLoginHistory';
import DiscountCode from './Subscription/DiscountCode';
import UserList from './Team/UserList';
import DriverReport from './Team/DriverReport';
import GuestManagement from './Marketing/GuestManagement';
import Help from './Marketing/Help';
import RecordManagement from './TransactionManagement/RecordManagement';
import WaitList from './TransactionManagement/WaitList';
import CompletdTransaction from './TransactionManagement/CompletdTransaction';
import WillCall from './TransactionManagement/WillCall';
import FeedBackList from './TransactionManagement/FeedBackList';
import ReservationReport from './TransactionManagement/ReservationReport';
import CashoutReport from './TransactionManagement/CashoutReport';
import StaticReport from './TransactionManagement/StaticReport';
import DeletedTransaction from './TransactionManagement/DeletedTransaction';
import GmapParties from './TransactionManagement/GmapParties';
import CancelledParking from './ParkingPermit/CancelledParking';
import ParkingManagement from './ParkingPermit/ParkingManagement';
import ParkingAvailability from './ParkingPermit/ParkingAvailability';
import ParkingWillCall from './ParkingPermit/ParkingWillCall';
import ParkingLocation from './ParkingPermit/ParkingLocation';
import StaticParking from './ParkingPermit/StaticParking';
import ParkingCommisionReport from './ParkingPermit/ParkingCommisionReport';
import ParkingPackage from './ParkingPermit/ParkingPackage';
import DeletedParking from './ParkingPermit/DeletedParking';
import CardHeader from './Settings/CardHeader';
import Message from './Settings/Message';
import ConfigurationSettings from './Settings/ConfigurationSettings';
import FeedBackQuestionnaries from './Settings/FeedBackQuestionnaries';
import PostArticle from './Settings/PostArticle';
import ConfirmationCard from './Settings/ConfirmationCard';
import Kiosk from './Settings/Kiosk';
import WaitTypes from './Settings/WaitTypes';
import PageSettings from './Settings/PageSettings';
import IconList from './Settings/IconList';
import AllowedIP from './Settings/AllowedIP';
import DriverVehicles from './Settings/DriverVehicles';
import AccountType from './Settings/AccountType';
import Advertisement from './Settings/Advertisement';
import Login from './Login';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [LoginSuccess, setLoginSuccess] = useState(false);

  function toggleDropdown(e) {
    debugger;
    e.preventDefault();
    const dropdown = e.target.nextElementSibling;
    if (dropdown.style.display === "block" || dropdown == null) {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  return (
    <div>
      <Login></Login>
      {LoginSuccess == true &&
        <Router>
          <div>
            {/* Offcanvas */}
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Transport-Service</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* <Nav className="flex-column">
              <NavItem>
                <NavLink tag={Link} to="/SuperAdminDashboard" onClick={handleClose}>
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Package" onClick={handleClose}>
                  Package
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/AccessRole" onClick={handleClose}>
                AccessRole
                </NavLink>
              </NavItem>

            </Nav> */}
                <ul className='Roleul'>
                  <li className='Roleli'><a href="SuperAdminDashboard" onClick={handleClose}><i class="bi bi-display"></i> Dashboard</a></li>
                  <li className='Roleli'>
                    {/* <a href="/" onClick={(e) => toggleDropdown(e)} className='bi bi-arrow-right'>Transaction Management</a> */}
                    <a href="/" onClick={(e) => toggleDropdown(e)} >
                      <i className="bi bi-gear-fill" ></i>
                      Transaction Management
                    </a>
                    <ul className="DropdownMenu">
                      <li><a href="/RecordManagement" className='transaction-link'><i class="bi bi-gear-wide"></i> Record Management</a></li>
                      <li><a href="/WaitList" className='transaction-link'><i class="bi bi-gear-wide"></i>WaitList Report</a></li>
                      <li><a href="/CompletdTransaction" className='transaction-link'> <i class="bi bi-gear-wide"></i>Completd Transaction</a></li>
                      <li><a href="/WillCall" className='transaction-link'> <i class="bi bi-gear-wide"></i>Will Call</a></li>
                      <li><a href="/FeedBackList" className='transaction-link'><i class="bi bi-gear-wide"></i>FeedBack List</a></li>
                      <li><a href="/ReservationReport" className='transaction-link'><i class="bi bi-gear-wide"></i>Reservation Report</a></li>
                      <li><a href="/StaticReport" className='transaction-link'><i class="bi bi-gear-wide"></i>Static Report</a></li>
                      <li><a href="/CancelledTransaction" className='transaction-link'><i class="bi bi-gear-wide"></i>Cancelled Transaction</a></li>
                      <li><a href="/DeletedTransaction" className='transaction-link'><i class="bi bi-gear-wide"></i>Deleted Transaction</a></li>
                      <li><a href="/GmapParties" className='transaction-link'><i class="bi bi-gear-wide"></i>Gmap Parties</a></li>
                      <li><a href="/CashoutReport" className='transaction-link'><i class="bi bi-gear-wide"></i>Cashout Report</a></li>
                    </ul>
                  </li>
                  <li className='Roleli'>
                    <a href="/" onClick={(e) => toggleDropdown(e)}>  <i className="bi bi-people" ></i> Team</a>
                    <ul className="DropdownMenu">
                      <li><a href='/UserList' className='transaction-link'><i class="bi bi-gear-wide"></i> User List</a></li>
                      <li><a href='/DriverReport' className='transaction-link'> <i class="bi bi-gear-wide"></i>Driver Report</a></li>
                    </ul>
                  </li>
                  <li className='Roleli'>
                    <a href="/" onClick={(e) => toggleDropdown(e)}>  <i className="bi bi-truck" ></i>Parking Permit</a>
                    <ul className="DropdownMenu">
                      <li>
                        <a href='/ParkingManagement' className='transaction-link'><i class="bi bi-gear-wide"></i>Parking Management</a>
                      </li>
                      <li>
                        <a href='/ParkingAvailability' className='transaction-link'><i class="bi bi-gear-wide"></i>Parking Availability</a>
                      </li>
                      <li>
                        <a href='/WillCall' className='transaction-link'><i class="bi bi-gear-wide"></i>WillCall</a>
                      </li>
                      <li>
                        <a href='/ParkingPackage' className='transaction-link'><i class="bi bi-gear-wide"></i>Parking Package</a>
                      </li>
                      <li>
                        <a href='/ParkingLocation' className='transaction-link'><i class="bi bi-gear-wide"></i>Parking Location</a>
                      </li>
                      <li>
                        <a href='/CancelledParking' className='transaction-link'><i class="bi bi-gear-wide"></i>Cancelled Parking</a>
                      </li>
                      <li>
                        <a href='/DeletedParking' className='transaction-link'><i class="bi bi-gear-wide"></i>Deleted Parking</a>
                      </li>
                      <li>
                        <a href='/StaticParking'><i class="bi bi-gear-wide"></i>Static Parking</a>
                      </li>
                      <li>
                        <a href='/ParkingCommisionReport' className='transaction-link'><i class="bi bi-gear-wide"></i>Parking Commision Report</a>
                      </li>
                    </ul>
                  </li>
                  <li className='Roleli'>
                    <a href='/' onClick={(e) => toggleDropdown(e)}>  <i className="bi bi-person-gear" ></i>Marketing</a>
                    <ul className="DropdownMenu"><li><a href='/GuestManagement'><i class="bi bi-gear-wide"></i>Guest Management</a></li></ul>
                  </li>
                  <li className='Roleli'>
                    <a href='#Settings' onClick={(e) => toggleDropdown(e)}>  <i className="bi bi-gear-fill" ></i>Settings</a>
                    <ul className="DropdownMenu">
                      <li><a href='/Message' className='transaction-link'><i class="bi bi-gear-wide"></i>Message</a></li>

                      <li><a href='/ConfigurationSettings' className='transaction-link'><i class="bi bi-gear-wide"></i>Configuration Settings</a></li>

                      <li><a href='/FeedBackQuestionnaries'><i class="bi bi-gear-wide"></i>FeedBack Questionnaries</a></li>

                      <li><a href='/PostArticle' className='transaction-link'><i class="bi bi-gear-wide"></i>Post Article</a></li>

                      <li><a href='/ConfirmationCard' className='transaction-link'><i class="bi bi-gear-wide"></i>Confirmation Card</a></li>

                      <li><a href='/Kiosk' className='transaction-link'><i class="bi bi-gear-wide"></i>Kiosk</a></li>

                      <li><a href='/Advertisement' className='transaction-link'><i class="bi bi-gear-wide"></i>Advertisement</a></li>

                      <li><a href='/WaitTypes' className='transaction-link'><i class="bi bi-gear-wide"></i>Wait Types</a></li>

                      <li><a href='/CardHeader' className='transaction-link'><i class="bi bi-gear-wide"></i>Card Header</a></li>

                      <li><a href='/PageSettings' className='transaction-link'><i class="bi bi-gear-wide"></i>Page Settings</a></li>

                      <li><a href='/IconList' className='transaction-link'><i class="bi bi-gear-wide"></i>Icon List</a></li>

                      <li><a href='/AllowedIP' className='transaction-link'><i class="bi bi-gear-wide"></i>Allowed IP</a></li>

                      <li><a href='/DriverVehicles' className='transaction-link'><i class="bi bi-gear-wide"></i>Driver Vehicles</a></li>

                      <li><a href='/AccountType' className='transaction-link'><i class="bi bi-gear-wide"></i>Account Type</a></li>
                    </ul>
                  </li>
                  <li className='Roleli'>
                    <a href='/' onClick={(e) => toggleDropdown(e)}>  <i className="bi bi-person-add" ></i>User Management</a>
                    <ul className="DropdownMenu">
                      <li><a href='/AccessRole' className='transaction-link'><i class="bi bi-gear-wide"></i>AccessRole</a></li>
                      <li><a href='/RolePrivileges' className='transaction-link'><i class="bi bi-gear-wide"></i>Role Privileges</a></li>
                      <li><a href='/Roles' className='transaction-link'><i class="bi bi-gear-wide"></i>Roles</a></li>
                      <li><a href='/Users' className='transaction-link'><i class="bi bi-gear-wide"></i>Users</a></li>
                      <li><a href='/AditLog' className='transaction-link'><i class="bi bi-gear-wide"></i>AditLog</a></li>
                    </ul>
                  </li>
                  <li className='Roleli'>
                    <a href='/' onClick={(e) => toggleDropdown(e)}>  <i className="bi bi-geo-alt-fill" ></i>Location</a>
                    <ul className="DropdownMenu">
                      <li><a href='/Zone' className='transaction-link'><i class="bi bi-gear-wide"></i>Zone</a></li>
                      <li><a href='/ZoneCharge' className='transaction-link'><i class="bi bi-gear-wide"></i>Zone Charge</a></li>
                      <li><a href='/LocationCategory' className='transaction-link'><i class="bi bi-gear-wide"></i>Location Category</a></li>
                      <li><a href='/Location' className='transaction-link'><i class="bi bi-gear-wide"></i>Location</a></li>
                      <li><a href='/Trips' className='transaction-link'><i class="bi bi-gear-wide"></i>Trips</a></li>
                    </ul>
                  </li>
                  <li className='Roleli'>
                    <a href='/' onClick={(e) => toggleDropdown(e)}>  <i className="bi bi-file-person" ></i>Subscription</a>
                    <ul className="DropdownMenu">
                      <li><a href='/MyCompany' className='transaction-link'><i class="bi bi-gear-wide"></i>My Company</a></li>
                      <li><a href='/MyUsage' className='transaction-link'><i class="bi bi-gear-wide"></i>My Usage</a></li>
                      <li><a href='/MyCharts' className='transaction-link'><i class="bi bi-gear-wide"></i>My Charts</a></li>
                      <li><a href='/TaxServiceCodes' className='transaction-link'><i class="bi bi-gear-wide"></i>Tax and Services Codes</a></li>
                      <li><a href='/ComissionReport' className='transaction-link'><i class="bi bi-gear-wide"></i>Comission Report</a></li>
                      <li><a href='/UserLoginHistory' className='transaction-link'><i class="bi bi-gear-wide"></i>User Login History</a></li>
                      <li><a href='/DiscountCode' className='transaction-link'><i class="bi bi-gear-wide"></i>Discount Code</a></li>
                    </ul>
                  </li>
                  <li className='Roleli'><a href='/Help'>  <i className="bi bi-gear-fill" ></i>Help</a></li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>

            {/* Navbar */}
            <Navbar color="navbar navbar-dark bg-primary" dark expand="md">
              {/* <NavbarToggler onClick={toggle} /> */}
              <NavbarToggler
                className="ms-2 d-block" // `d-block` ensures it's always visible
                onClick={handleShow}
                aria-label="Toggle Offcanvas"
              />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/SuperAdminDashboard">
                      Dashboard
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/Package">
                      Package
                    </NavLink>
                  </NavItem>

                </Nav>
              </Collapse>
            </Navbar>

            {/* Routes */}
            <Routes>
              <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard />} />
              <Route path="/Package" element={<Package />} />
              {/* UserManagement Module */}
              <Route path='/Roles' element={<Roles />} />
              <Route path='/Users' element={<Users />} />
              <Route path='/AccessRole' element={<AccessRole />} />
              <Route path='/AditLog' element={<AditLog />} />
              <Route path='/RolePrivileges' element={<RolePrivileges />} />
              {/* Location Module */}
              <Route path='/Zone' element={<Zone />} />
              <Route path='/ZoneCharge' element={<ZoneCharge />} />
              <Route path='/LocationCategory' element={<LocationCategory />} />
              <Route path='/Location' element={<Location />} />
              <Route path='/Trips' element={<Trips />} />
              {/* Subscription Module */}
              <Route path='/MyCompany' element={<MyCompany />} />
              <Route path='/MyUsage' element={<MyUsage />} />
              <Route path='/MyCharts' element={<MyCharts />} />
              <Route path='/TaxServiceCodes' element={<TaxServiceCodes />} />
              <Route path='/ComissionReport' element={<ComissionReport />} />
              <Route path='/UserLoginHistory' element={<UserLoginHistory />} />
              <Route path='/DiscountCode' element={<DiscountCode />} />
              {/* Team Module */}
              <Route path='/UserList' element={<UserList />} />
              <Route path='/DriverReport' element={<DriverReport />} />
              {/* Marketing */}
              <Route path='/GuestManagement' element={<GuestManagement />} />
              <Route path='/Help' element={<Help />} />
              {/* Transaction Management Module */}
              <Route path='/RecordManagement' element={<RecordManagement />} />
              <Route path='/WaitList' element={<WaitList />} />
              <Route path='/CompletdTransaction' element={<CompletdTransaction />} />
              <Route path='/WillCall' element={<WillCall />} />
              <Route path='/FeedBackList' element={<FeedBackList />} />
              <Route path='/ReservationReport' element={<ReservationReport />} />
              <Route path='/StaticReport' element={<StaticReport />} />
              <Route path='/CancelledTransaction' element={<CompletdTransaction />} />
              <Route path='/DeletedTransaction' element={<DeletedTransaction />} />
              <Route path='/GmapParties' element={<GmapParties />} />
              <Route path='/CashoutReport' element={<CashoutReport />} />
              {/* Parking Permit */}
              <Route path='/ParkingManagement' element={<ParkingManagement />} />
              <Route path='/ParkingAvailability' element={<ParkingAvailability />} />
              <Route path='/WillCall' element={<ParkingWillCall />} />
              <Route path='/ParkingPackage' element={<ParkingPackage />} />
              <Route path='/ParkingLocation' element={<ParkingLocation />} />
              <Route path='/CancelledParking' element={<CancelledParking />} />
              <Route path='/DeletedParking' element={<DeletedParking />} />
              <Route path='/StaticParking' element={<StaticParking />} />
              <Route path='/ParkingCommisionReport' element={<ParkingCommisionReport />} />
              {/* Settings Module */}
              <Route path='/Message' element={<Message />} />
              <Route path='/ConfigurationSettings' element={<ConfigurationSettings />} />
              <Route path='/FeedBackQuestionnaries' element={<FeedBackQuestionnaries />} />
              <Route path='/PostArticle' element={<PostArticle />} />
              <Route path='/ConfirmationCard' element={<ConfirmationCard />} />
              <Route path='/Kiosk' element={<Kiosk />} />
              <Route path='/Advertisement' element={<Advertisement />} />
              <Route path='/WaitTypes' element={<WaitTypes />} />
              <Route path='/CardHeader' element={<CardHeader />} />
              <Route path='/PageSettings' element={<PageSettings />} />
              <Route path='/IconList' element={<IconList />} />
              <Route path='/AllowedIP' element={<AllowedIP />} />
              <Route path='/DriverVehicles' element={<DriverVehicles />} />
              <Route path='/AccountType' element={<AccountType />} />
            </Routes>
          </div>
        </Router>
      }
    </div>
  );
};

export default App;
