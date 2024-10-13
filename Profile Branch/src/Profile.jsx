import React, { useState } from 'react';
import styles from './Profile.module.css';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date_of_birth: '',
    phone: '',
    gender: '',
    profilePic: null
  });

  const [profilePicPreview, setProfilePicPreview] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, profilePic: file });

    const reader = new FileReader();
    reader.onload = (e) => {
      setProfilePicPreview(e.target.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  const handleCancel = () => {
    console.log('Form canceled');
    setFormData({
      name: '',
      email: '',
      date_of_birth: '',
      phone: '',
      gender: '',
      profilePic: null
    });
    setProfilePicPreview(null);
  };

  return (
    <div className={styles.profile-container}>
      <div className={styles.profile-pic-section}>
        <label htmlFor="profilePic">
          <i className="fas fa-user-circle"></i>
        </label>
        <input 
          type="file" 
          id="profilePic" 
          accept="image/*" 
          onChange={handleProfilePicChange} 
          hidden 
        />
        {profilePicPreview && (
          <img 
            id="profilePreview" 
            src={profilePicPreview} 
            alt="Profile Preview" 
            className={styles.profile-pic} 
          />
        )}
      </div>

      <div className={styles.profile-form-section}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              id="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="DOB">Date of Birth</label>
            <input
              type="date"
              id="DOB"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="Phone">Phone</label>
            <input
              type="tel"
              id="Phone"
              name="phone"
              value={formData.phone}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="Gender">Gender</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                /> Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                /> Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                /> Other
              </label>
            </div>
          </div>

          <div className={styles.button}>
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
