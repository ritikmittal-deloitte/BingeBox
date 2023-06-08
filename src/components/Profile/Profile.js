import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PencilSquare from '../../assets/icons/pencil-square.png'
import User1 from '../../assets/images/image 74.png'
import User2 from '../../assets/images/image 75.png'
import User3 from '../../assets/images/image 76.png'
import PlusIcon from '../../assets/icons/plus.png'
import './Profile.scss'
import { UserContext } from '../../context/Context/UserContext/UserState'
import AddAccountsModal from './AddAccountsModal'
import { useRef } from 'react'

export default function Profile() {
    const navigate = useNavigate()
    const divRef = useRef();
    const { genre, setGenre } = useContext(UserContext)
    const [openModal, setOpenModal] = useState(false)
    const logout = () => {
        navigate('/login')
    }
    const handlePreferencesPage = (e) => {
        navigate('/userpreferences', { state: dummyData.genre })
    }

    const handleModalOpen = (e,p) => {
        setOpenModal(true)
        
    } 
    const handleModalClose = (e)=> {
        setOpenModal(false)
    }
    return (
        <div className='profile-page'>
            <div className='profile-container'>
                <div className='details-section'>
                    <div className='heading-container-profile'><div className='profile-heading'>Profile</div></div>
                    <div className='email-section'>
                        <div className='email-detail'>Email &nbsp;-&nbsp;&nbsp; {dummyData.email}</div>
                        <div className='email-edit-tool'>
                            {/* <img src={PencilSquare} alt='tool-icon-not-available' /> */}
                        </div>
                    </div>
                    <div className='phone-section'>
                        <div className='phone-detail'>Phone&nbsp; number&nbsp; - &nbsp;&nbsp;{dummyData.phone}</div>
                        <div className='phone-edit-tool'>
                            {/* <img src={PencilSquare} alt='tool-icon-not-available' /> */}
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className='genre-section'>
                    <div className='heading-container-genre'><div className='genre-heading'>Interested Genres</div></div>
                    <div className='interested-genre-section'>
                        <div className='genre-detail'>
                            {genre.map((item) => {
                                return (
                                    <div className='genre-box'>{item}</div>
                                )
                            })}
                        </div>
                        <div className='genre-edit-tool' onClick={(e) => handlePreferencesPage(e)} style={{ cursor: 'pointer' }}><img src={PencilSquare} alt='tool-icon-not-available' /></div>
                    </div>
                </div>
                <div className="line"></div>
                <div className='manage-accounts-section'>
                    <div className='heading-container-manage'><div className='manage-heading'>Manage accounts</div></div>
                    <div className='accounts-info-section'>
                        <div className='existing-accounts'>
                            {dummyData.accounts.map((acc) => {
                                return (
                                    <div className='account-box'>
                                        <img className='account-pic' src={acc.img} alt='pic not available' />
                                        <div className='account-name'>{acc.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='add-new-account' onClick={(e) => handleModalOpen(e,'btn')}>
                            <div className='add-new-icon' ><img src={PlusIcon} className='plus-icon-account' /></div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className='logout-section'>
                    <div className='logout-button' onClick={(e) => { logout() }}>Logout</div>
                </div>
            </div>
                        {openModal===true && <AddAccountsModal openModal={openModal} setOpenModal={setOpenModal} closeModal={handleModalClose} />}
        </div>
    )
}

const dummyData = {
    email: 'manishsingh96@gmail.com',
    phone: '845984958988',
    genre: ['Horror', 'Romantic', 'Comedy'],
    accounts: [{ name: 'Sonali', img: User2 }, { name: 'Naina', img: User3 }, { name: 'Saurabh', img: User1 },]
}