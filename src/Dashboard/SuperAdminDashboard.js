import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';
import SelectBox from 'devextreme-react/select-box';


const SuperAdminDashboard = () => {
    const [DashBoardData, setDashBoardData] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [DashboradShow, setDashboradShow] = useState(false);

    const BindData = () => {
        axios.post('https://services.shuttleq.net/api/Company/GetAllMyAccounts?status=1')
            .then(res => {
                setDashBoardData(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const [Package, setPackage] = useState([])
    const PackageBinding = () => {
        axios.post('https://services.shuttleq.net/api/Company/GetAllPackages?status=1')
            .then(res => {
                setPackage(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const [DailCode, setDailCode] = useState([])
    const CountryDailCodeBinding = () => {
        axios.get('https://services.shuttleq.net/api/ConfigReservation/GetCountries')
            .then(res => {
                console.log(res.data.data);
                setDailCode(res.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        BindData();
        PackageBinding();
        CountryDailCodeBinding()
    }, []);

    const toggleModal = () => setModalOpen(!modalOpen);

    const handleCardClick = (data) => {
        setSelectedCard(data);
        toggleModal();
    };

    const toggleDashboardModal = () => setDashboradShow(!DashboradShow);
    const [TextShow, setTextShow] = useState(false)
    const toggleTextModal = () => setTextShow(!TextShow)

    const OnTextClick = () => {
        toggleTextModal()
    }

    const [MailShow, setMailShow] = useState(false)
    const toggleMailModal = () => setMailShow(!MailShow)

    const OnMailClick = () => {
        toggleMailModal()
    }
    const [editorContent, setEditorContent] = useState('<p>Write your message here...</p>');

    const handleEditorChange = (e) => {
        setEditorContent(e.target.innerHTML);
    };

    const formatText = (command, value = null) => {
        document.execCommand(command, false, value);
    };

    const handleSubmit = () => {
        console.log('Submitted Content:', editorContent);
        // Add your submission logic here
    };
    const [PackageShow, setPackageShow] = useState(false)
    const togglePackageModal = () => setPackageShow(!PackageShow)
    const OnPackageClick = () => {
        togglePackageModal()
    }

    const [GlobalSettingShow, setGlobalSettingShow] = useState(false)
    const toggleGlobaleSettingModal = () => setGlobalSettingShow(!GlobalSettingShow)
    const OnGlobalSettingClick = () => {
        toggleGlobaleSettingModal()
    }


    const [SetupNumeberShow, setSetupNumeberShow] = useState(false)
    const toggleSetupNumeberShowModal = () => setSetupNumeberShow(!SetupNumeberShow)
    const OnSetupNumeberClick = () => {
        toggleSetupNumeberShowModal()
    }

    return (
        <>
            <button className='fixed-button' onClick={toggleDashboardModal}>
                +
            </button>
            <div className="container mt-3">
                <h2>Dashboard - SuperAdmin</h2>
                <div className="row">
                    {DashBoardData.map((i, key) => (
                        <div
                            className="col-md-4 mb-3 draggable"
                            key={key}
                            onClick={() => handleCardClick(i)}
                            draggable="true"
                            onDragStart={(e) => e.target.classList.add('dragging')}
                            onDragEnd={(e) => e.target.classList.remove('dragging')}
                        >
                            <div className="card shadow-sm border-0">
                                <div className="card-body">
                                    <h5 className="card-title">{i.companyName}</h5>
                                    <p className="card-text mb-1"><strong>Contact:</strong> {i.contactPerson}</p>
                                    <p className="card-text mb-1"><strong>Email:</strong> {i.primaryEmail}</p>
                                    <p className="card-text mb-1"><strong>Phone:</strong> {i.primaryPhone}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCard && (
                <Modal isOpen={modalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>{selectedCard.companyName}</ModalHeader>
                    <ModalBody>
                        <div className="row g-2 mb-3">
                            <div className="col">
                                <button className="btn btn-primary w-100 text-truncate" onClick={() => OnTextClick()}>
                                    Text
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary w-100 text-truncate" onClick={() => OnMailClick()}>
                                    Mail
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary w-100 text-truncate" onClick={() => OnPackageClick()}>
                                    Change Package
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary w-100 text-truncate" onClick={() => OnSetupNumeberClick()}>
                                    Setup-Number
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary w-100 text-truncate" onClick={() => OnGlobalSettingClick()}>
                                    Global Setting
                                </button>
                            </div>
                        </div>
                        <p><strong>Contact Person:</strong> {selectedCard.contactPerson}</p>
                        <p><strong>Email:</strong> {selectedCard.primaryEmail}</p>
                        <p><strong>Phone:</strong> {selectedCard.primaryPhone}</p>
                    </ModalBody>
                </Modal>
            )}

            {DashboradShow && (
                <Modal isOpen={DashboradShow} toggle={toggleDashboardModal}>
                    <ModalHeader toggle={toggleDashboardModal}>Create Account</ModalHeader>
                    <ModalBody>
                        <p>Note: Property phone is the permanent a/c number. Can not be changed in future.</p>
                        <div className="col">
                            <div className="form-group">
                                <p><strong>Property Phone:</strong> </p>
                                <input type='text'
                                    className="form-control" rows="4"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <p><strong>Email:</strong> </p>
                                <input type='text'
                                    className="form-control" rows="4"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <p><strong>User Name:</strong> </p>
                                <input type='text'
                                    className="form-control" rows="4"
                                />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-group'>
                                <p><strong>Password</strong></p>
                                <input type='text' className='form-control' rows="4"></input>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-group'>
                                <p><strong>Confirm-Password</strong></p>
                                <input type='text' className='form-control' rows="4"></input>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='col'>
                            <div className='form-group'>
                                <p><strong>First Name</strong></p>
                                <input type='text' className='form-control' rows="4"></input>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-group'>
                                <p><strong>Last Name</strong></p>
                                <input type='text' className='form-control' rows="4"></input>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-group'>
                                <p><strong>Mobile Number</strong></p>
                                <input type='text' className='form-control mb-3' rows="2"></input>
                                <input type='text' className='form-control' rows="2"></input>
                            </div>
                        </div>
                        <hr></hr>
                        <p><strong>Others</strong> </p>
                        <div className='col'>
                            <div className='form-group'>
                                <p><strong>Parking Permit:</strong></p>
                                <input type='check' className='form-control mb-3' rows="2"></input>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-group'>
                                <p><strong>Time Zone:</strong></p>
                                <input type='check' className='form-control mb-3' rows="2"></input>
                            </div>
                        </div>


                        <p><strong>I have read, understood, and agreed to the privacy policy and the terms of use</strong> </p>

                        <ModalFooter className="d-flex justify-content-between">
                            <Button color="danger" onClick={toggleDashboardModal}>Close</Button>
                            <Button color="primary"  >Submit</Button>
                        </ModalFooter>

                    </ModalBody>
                </Modal>
            )}
            {TextShow && (
                <Modal isOpen={TextShow} toggle={toggleTextModal}>
                    <ModalHeader toggle={toggleTextModal}>Send Message</ModalHeader>
                    <ModalBody>
                        <div className="row g-2 mb-3">
                            <div className="col">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="adminCheckbox" />
                                    <label className="form-check-label" htmlFor="adminCheckbox">Admin</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="usersCheckbox" />
                                    <label className="form-check-label" htmlFor="usersCheckbox">Users</label>
                                </div>
                            </div>
                        </div>
                        <div className="row g-2 mb-3">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="messageTextarea">Message</label>
                                    <textarea className="form-control" id="messageTextarea" rows="4" />
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <Button color="danger" onClick={toggleTextModal}>Close</Button>
                        <Button color="primary" >Submit</Button>
                    </ModalFooter>
                </Modal>

            )}
            {MailShow && (
                <Modal isOpen={MailShow} toggle={toggleMailModal}>
                    <ModalHeader toggle={toggleMailModal}>Send Mail</ModalHeader>
                    <ModalBody>
                        <div className="row g-2 mb-3">
                            <div className="col">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Admin</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label" >Users</label>
                                </div>
                            </div>
                        </div>
                        <div className="row g-2 mb-3">
                            <div className="col">
                                <div className="form-group">
                                    <label >Subject</label>
                                    <input type='text' className="form-control" rows="4" />
                                </div>
                            </div>
                        </div>
                        <div className="row g-2 mb-3">
                            <div className="col">
                                <label htmlFor="messageEditor">Message</label>
                                <div className="toolbar mb-2">
                                    <Button color="light" onClick={() => formatText('bold')}>
                                        <b>B</b>
                                    </Button>
                                    <Button color="light" onClick={() => formatText('italic')}>
                                        <i>I</i>
                                    </Button>
                                    <Button color="light" onClick={() => formatText('underline')}>
                                        <u>U</u>
                                    </Button>
                                    <Button color="light" onClick={() => formatText('insertOrderedList')}>
                                        OL
                                    </Button>
                                    <Button color="light" onClick={() => formatText('insertUnorderedList')}>
                                        UL
                                    </Button>
                                    <Button color="light" onClick={() => formatText('createLink', prompt('Enter URL:', 'http://'))}>
                                        Link
                                    </Button>
                                </div>
                                <div
                                    id="messageEditor"
                                    contentEditable
                                    className="form-control"
                                    style={{ minHeight: '150px', border: '1px solid #ced4da', padding: '10px' }}
                                    dangerouslySetInnerHTML={{ __html: editorContent }}
                                    onInput={handleEditorChange}
                                />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <Button color="danger" onClick={toggleMailModal}>Close</Button>
                        <Button color="primary" onClick={() => handleSubmit()}>Submit</Button>
                    </ModalFooter>
                </Modal>

            )}
            {PackageShow && (
                <Modal isOpen={PackageShow} toggle={togglePackageModal}>
                    <ModalHeader toggle={togglePackageModal}>Send Change Package Message</ModalHeader>
                    <ModalBody>
                        <div className="row g-2 mb-3">
                            <div className="col">
                                <div className="form-group">
                                    <label >Package</label>
                                    <SelectBox
                                        dataSource={Package}
                                        displayExpr="packageName"
                                        valueExpr="packageId"
                                        placeholder="Select Package"
                                        className="form-control" rows="4"
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <Button color="danger" onClick={togglePackageModal}>Close</Button>
                        <Button color="primary"  >Submit</Button>
                    </ModalFooter>
                </Modal>

            )}
            {GlobalSettingShow && (
                <Modal isOpen={GlobalSettingShow} toggle={toggleGlobaleSettingModal}>
                    <ModalHeader toggle={toggleGlobaleSettingModal}>Global Setting</ModalHeader>
                    <ModalBody>
                        <div className="row g-2 mb-3">
                            <div className="col">
                                <div className="form-group">
                                    <label >Change Global Setting</label>
                                    <SelectBox
                                        dataSource={[{ id: 1, name: true }, { id: 2, name: false }]}
                                        displayExpr="name"
                                        valueExpr="id"
                                        placeholder="Select Global Setting"
                                        className="form-control" rows="4"
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <Button color="danger" onClick={toggleGlobaleSettingModal}>Close</Button>
                        <Button color="primary"  >Submit</Button>
                    </ModalFooter>
                </Modal>

            )}
            {SetupNumeberShow && (
                <Modal isOpen={SetupNumeberShow} toggle={toggleSetupNumeberShowModal}>
                    <ModalHeader toggle={toggleSetupNumeberShowModal}>Assign Twilio Number</ModalHeader>
                    <ModalBody>
                        <div className="row g-2 mb-3">
                            <div className="col">
                                <div className="form-group">
                                    <label > Country Code :</label>
                                    <SelectBox
                                        dataSource={DailCode}
                                        displayExpr="name"
                                        valueExpr="countryId_Pk"
                                        placeholder="Select"
                                        className="form-control" rows="4"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row g-2 mb-3">
                            <div className="col">
                                <div className="form-group">
                                    <label> Twilio Number:</label>
                                    <input type='text'
                                        placeholder="Select"
                                        className="form-control" rows="4"
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <Button color="danger" onClick={toggleSetupNumeberShowModal}>Close</Button>
                        <Button color="primary"  >Submit</Button>
                    </ModalFooter>
                </Modal>

            )}
        </>
    );
};

export default SuperAdminDashboard;
