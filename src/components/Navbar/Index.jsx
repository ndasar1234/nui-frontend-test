import { faBars, faBell, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import { Logout, Person, ArrowDropDown, Login } from "@mui/icons-material";

Modal.setAppElement('#root');

function Index({ toggle }) {
  const avatar =
    "";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: '10%', right: '10%' });
  const avatarButtonRef = useRef(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();


  const updateModalPosition = () => {
    const rect = avatarButtonRef.current.getBoundingClientRect();
    setModalPosition({ top: `${rect.top}px`, left: `${rect.left}px` });
  };

  const handleAvatarClick = () => {
    updateModalPosition();
    setIsModalOpen(true);
  };

  const handleLoginClick = () => {
    setLoggedIn(true);
    setIsModalOpen(false);
    // navigate('/auth/salesforce');
  }

  const handleProfileClick = () => {
    setIsModalOpen(false);
    navigate('/profile');
  };

  const handleLogoutClick = () => {
    setIsModalOpen(false);
    setLoggedIn(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isModalOpen) {
        updateModalPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isModalOpen]);

  const modalStyles = {
    content: {
      top: modalPosition.top,
      left: modalPosition.left,
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-60%, 0%)',
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <header className="">
        <div className="shadow-sm">
          <div className="relative bg-white flex w-full items-center px-5 py-2.5">
            <div className="flex-1 flex flex-row gap-4 items-center">
              <p className="block md:hidden cursor-pointer">
                <FontAwesomeIcon icon={faBars} onClick={toggle} />
              </p>
              <Typography variant="h6" color="textSecondary">EATS for NUI (Name TBD)</Typography>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleMenuClick}
                style={{ textTransform: 'none', marginLeft: '20px', backgroundColor: '#f5f5f5' }}
              >
                  <Typography variant="h6" color="textSecondary">All</Typography>
                  <ArrowDropDown style={{ marginLeft: '75px', color: 'rgba(0, 0, 0, 0.54)' }}/>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                  style: {
                    // paddingRight: '40px',
                    color: 'rgba(0, 0, 0, 0.54)'
                  },
                }}
              >
                <MenuItem style={{paddingRight: '40px'}} onClick={handleMenuClose}>Option 1</MenuItem>
                <MenuItem style={{paddingRight: '40px'}} onClick={handleMenuClose}>Option 2</MenuItem>
                <MenuItem style={{paddingRight: '40px'}} onClick={handleMenuClose}>Option 3</MenuItem>
              </Menu>
            </div>
            <div className="">
              <ul className="flex flex-row gap-4 items-center">
                <li>
                  <span className="h-9 w-9 cursor-pointer text-gray-600">
                    <FontAwesomeIcon icon={faMessage} />
                  </span>
                </li>
                <li>
                  <span className="h-9 w-9 cursor-pointer text-gray-600">
                    <FontAwesomeIcon icon={faBell} />
                  </span>
                </li>
                <li>
                  <span>
                    <img
                      className="rounded-full h-9 w-9 border cursor-pointer"
                      src={avatar}
                      alt="Avatar"
                      ref={avatarButtonRef}
                      onClick={handleAvatarClick}
                    />
                    <Modal
                      isOpen={isModalOpen}
                      onRequestClose={() => setIsModalOpen(false)}
                      style={modalStyles}
                      contentLabel="Modal"
                    >
                      {isLoggedIn ? (
                        <>
                          <Button
                            variant="text"
                            onClick={handleProfileClick}
                          >
                            <Person style={{ color: 'rgba(0, 0, 0, 0.54)', marginRight: '20px' }}/>
                            <Typography variant='button' color="textSecondary">Profile</Typography>
                          </Button>
                          <Button
                            variant="text"
                            onClick={handleLogoutClick}
                          >
                            <Logout style={{ color: 'rgba(0, 0, 0, 0.54)', marginRight: '20px' }}/>
                            <Typography variant='button' color="textSecondary">Logout</Typography>
                          </Button>
                        </>
                      ) : (
                        <Button
                        variant="text"
                        onClick={handleLoginClick}
                      >
                        <Login style={{ color: 'rgba(0, 0, 0, 0.54)', marginRight: '20px' }}/>
                        <Typography variant='button' color="textSecondary">Login</Typography>
                      </Button>
                      )}
                    </Modal>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Index;
