import React, { useState, useEffect, useRef } from 'react';
import CircleIcon from '../../assets/icons/circle.png'
import CameraIcon from '../../assets/icons/camera.png'
import UserIcon from '../../assets/icons/user.png'
import { AccountAction } from '../../redux/AccountSlice';
import User1 from '../../assets/images/image 74.png'
import { useDispatch } from 'react-redux';
import './AddAccountsModal.scss'

export default function Modal({ divRef, closeModal }) {
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [genre, setGenre] = useState('');
    const [profile, setProfile] = useState(null);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch()
    const modalRef = useRef(null);
    const fileInputRef = useRef(null)

    const validateForm = () => {
        const errors = {};
        if (name.trim() === '') {
            errors.name = 'Name is required';
        }
        if (language.trim() === '') {
            errors.language = 'Language is required';
        }
        if (genre.trim() === '') {
            errors.genre = 'Genre is required';
        }
        if (profile === null) {
            errors.profile = 'Profile is required';
        }
        return errors;
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setProfile(file);
        if (errors.profile !== null) {
            let error = errors;
            error.profile = null
            setErrors(error)
            const reader = new FileReader();

            reader.onloadend = () => {
                profile(reader.result);
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleAddingAccount = () => {
        dispatch(AccountAction.addAccount({ name: name, img: URL.createObjectURL(profile) }))

    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeModal]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            // Submit the form
            // You can handle the form submission logic here
            console.log('Name:', name);
            console.log('Language:', language);
            console.log('Genre:', genre);
            console.log('Profile:', profile);
            handleAddingAccount()
            closeModal();
        } else {
            setErrors(validationErrors);
        }

        // Perform your submit logic here
        // You can access the form data in the state variables (name, language, genre, profile)
    };


    return (
        <div className="modal-accounts">
            <div className="modal-content" ref={modalRef}>
                <div className='headline-container-account'>
                    <div className='add-new-heading'>Add Account</div>
                </div>
                <form onSubmit={handleSubmit} className='account-form'>
                    <div className='account-content'>
                        <div className='left-hand-container'>
                            <div>
                                <input
                                    type="file"
                                    id="profile"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={(e) => handleFileInputChange(e)}
                                    className='profile-input-field'
                                />
                                {profile === null && <button type="button" className="file-input-button" onClick={handleButtonClick}>
                                    <img src={CircleIcon} className='circle-icon' alt='not available' />
                                    <img src={UserIcon} className='user-icon' alt='not available' />
                                    <img src={CameraIcon} className='camera-icon' alt='not available' />
                                </button>}
                                {
                                    profile !== null && <img src={URL.createObjectURL(profile)} className='file-input-button' onClick={handleButtonClick} alt='not available' />
                                }
                                {profile && <div className='uploaded-profile-text'>{profile.name}</div>}
                                <div className="error-signup">
                                    {errors.profile && <span className="error">{errors.profile.slice(0, 15)}</span>}
                                </div>
                            </div>
                        </div>
                        <div className='line-3'></div>
                        <div className='right-hand-container'>
                            <div className='account-input-div'>
                                <input
                                    className='account-input-field'
                                    placeholder='Name'
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <div className="error-signup">
                                    {errors.name && <span>* {errors.name}</span>}
                                </div>
                            </div>
                            <div className='account-input-div'>
                                <select
                                    className='account-input-field'
                                    id="language"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                >
                                    <option className='option-account' value="">Select Language</option>
                                    <option className='option-account' value="English">English</option>
                                    <option className='option-account' value="Hindi">Hindi</option>
                                    <option className='option-account' value="Punjabi">Punjabi</option>
                                    <option className='option-account' value="Bengali">Bengali</option>
                                    <option className='option-account' value="Marathi">Marathi</option>
                                    <option className='option-account' value="Kannada">Kannada</option>
                                </select>
                                <div className="error-signup">
                                    {errors.language && <span className="error">{errors.language}</span>}
                                </div>
                            </div>
                            <div className='account-input-div'>
                                <select
                                    className='account-input-field'
                                    id="genre"
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}
                                >
                                    <option className='option-account' value="">Select Genre</option>
                                    <option className='option-account' value="Action">Action</option>
                                    <option className='option-account' value="Comedy">Comedy</option>
                                    <option className='option-account' value="Romantic">Romantic</option>
                                    <option className='option-account' value="Horror">Horror</option>
                                    <option className='option-account' value="Documentary">Documentary</option>
                                    <option className='option-account' value="Kids">Kids</option>
                                </select>
                                <div className="error-signup">
                                    {errors.genre && <span className="error">{errors.genre}</span>}
                                </div>
                            </div>

                            <div className='submit-button'><button type="submit">Add Account</button></div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

