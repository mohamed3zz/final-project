import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import toast from 'react-hot-toast';
import { GrLogout } from "react-icons/gr";

export default function ProfilePage() {
  useEffect (() => {
              setTimeout(() => {
                  window.scrollTo({
                      top: 0,
                      // behavior: "smooth",
                      
                  })
              }, 0);
              
          }, [])
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // لو المستخدم مش موجود، حوله لصفحة تسجيل الدخول
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }
  const [profileImage, setProfileImage] = useState('https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid');

  // دالة للتعامل مع تغيير الصورة
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // قراءة الصورة وتحويلها لـ Base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        // هنا ممكن تبعت الصورة للسيرفر لو عايز تحفظها في بروفايل المستخدم
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='profile'>
    <div className="ProfilePage">
      <h1>Your Profile</h1>
      <div className="profile-image">
        <img 
          src={profileImage} 
          alt="Profile" 
        />
        {/* Input مخفي لتحديد الصورة */}
        <div className='profile-image-input'>
      <input 
          type="file" 
          id="fileInput" 
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleImageChange}
        />
        {/* زر لتغيير الصورة */}
        <button
        onClick={() => document.getElementById('fileInput').click()}>
            switch 
        </button>
                

      </div>
      </div>
    
      {/* باقي بيانات البروفايل */}
      <div className="profile-details">
        <p className="username">
          {user.username}
        </p>
        <p className="email">
          {user.email}
        </p>
      </div>
      <Button
        text="Logout"
        onClick={() => {
          logout();
          navigate('/');
          toast("Logout successful", { icon: <GrLogout style={{ color: "red" }}/>});
        }}
      />
    </div>
    </div>
  
    
      
  );
}
