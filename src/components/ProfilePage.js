import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading && !user) {
    return (
      <div className="app-container">
        <div className="header">
          <h1>Profile Page</h1>
          <p>Loading</p>
        </div>
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Loading</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>Profile Page</h1>
      </div>

      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            </div>
            <h2 className="profile-name">{`${user.name.first} ${user.name.last}`}</h2>
            <div className="profile-location">
              <i className="fas fa-map-marker-alt"></i>
              <span>{`${user.location.city}, ${user.location.country}`}</span>
            </div>
            <div className="profile-badge">
              <i className="fas fa-user-check"></i>
              <span>Pengguna Terverifikasi</span>
            </div>
          </div>

          <div className="profile-body">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <div className="contact-label">Email</div>
                  <div className="contact-value">{user.email}</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <div className="contact-label">Telepon</div>
                  <div className="contact-value">{user.phone}</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="contact-details">
                  <div className="contact-label">Seluler</div>
                  <div className="contact-value">{user.cell}</div>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3 className="section-title">
                <i className="fas fa-info-circle"></i>
                Informasi Dasar
              </h3>
              <div className="info-grid">
                <div className="info-row">
                  <span className="info-label">Jenis Kelamin</span>
                  <span className="info-value">
                    {user.gender === 'male' ? 'Laki-laki' : 'Perempuan'}
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-label">Tanggal Lahir</span>
                  <span className="info-value">{formatDate(user.dob.date)}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Umur</span>
                  <span className="info-value">{user.dob.age} tahun</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="details-card">
          <div className="details-header">
            <h2 className="details-title">
              <i className="fas fa-id-card"></i>
              Detail Profil
            </h2>
          </div>

          <div className="user-stats">
            <div className="stat-item">
              <div className="stat-value">{user.registered.age}+</div>
              <div className="stat-label">Tahun Bergabung</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{user.dob.age}</div>
              <div className="stat-label">Usia</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{user.nat}</div>
              <div className="stat-label">Kebangsaan</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">ID</div>
              <div className="stat-label">Pengguna</div>
            </div>
          </div>

          <div className="info-section">
            <h3 className="section-title">
              <i className="fas fa-user-tag"></i>
              Informasi Akun
            </h3>
            <div className="info-grid">
              <div className="info-row">
                <span className="info-label">Username</span>
                <span className="info-value">@{user.login.username}</span>
              </div>
              <div className="info-row">
                <span className="info-label">ID</span>
                <span className="info-value">{user.id.value || 'Tidak tersedia'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Terdaftar</span>
                <span className="info-value">{formatDate(user.registered.date)}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3 className="section-title">
              <i className="fas fa-map-marked-alt"></i>
              Alamat Lengkap
            </h3>
            <div className="info-grid">
              <div className="info-row">
                <span className="info-label">Jalan</span>
                <span className="info-value">
                  {`${user.location.street.number} ${user.location.street.name}`}
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Kota</span>
                <span className="info-value">{user.location.city}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Negara Bagian</span>
                <span className="info-value">{user.location.state}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Kode Pos</span>
                <span className="info-value">{user.location.postcode}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3 className="section-title">
              <i className="fas fa-globe"></i>
              Informasi Lainnya
            </h3>
            <div className="info-grid">
              <div className="info-row">
                <span className="info-label">Zona Waktu</span>
                <span className="info-value">{user.location.timezone.offset}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Koordinat</span>
                <span className="info-value">
                  {`${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;