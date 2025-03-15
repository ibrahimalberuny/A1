import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ProfileCard from './profile-card';

const ProfileCardsWrapper = ({ lang, profiles }) => {
  const isDefaultLang = lang === 'es';
  const topRef = useRef();
  const loadingPixel = useRef();
  const [filteredProfiles, setProfileCards] = useState([]);
  const chunkSize = 100;

  useEffect(() => {
    if (profiles.length > 0) {
      setProfileCards(profiles.slice(0, chunkSize));
    } else {
      setProfileCards([]);
    }
  }, [profiles]);

  useEffect(() => {
    let timeout;

    const loadMoreCards = () => {
      if (profiles.length > filteredProfiles.length) {
        setProfileCards((prevCards) =>
          prevCards.concat(profiles.slice(prevCards.length, prevCards.length + chunkSize))
        );
      }
    };

    const isScrollPixelInView = () => {
      const windowHeight = window.innerHeight;
      if (!loadingPixel.current) return false;
      const { y: scrollPixelY } = loadingPixel.current.getBoundingClientRect();
      return scrollPixelY < windowHeight && scrollPixelY > 100;
    };

    const onScroll = () => {
      clearTimeout(timeout);
      if (isScrollPixelInView()) {
        timeout = setTimeout(loadMoreCards, 10);
      }
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', onScroll, { passive: true });
    };
  }, [profiles, filteredProfiles, chunkSize]);

  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 30;

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile);

  const totalPageCount = Math.ceil(filteredProfiles.length / profilesPerPage);

  const pageNumbers = Array.from({ length: totalPageCount }, (_, i) => i + 1);

  const loadMoreCards = () => {
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
      scrollToTop(); 
    }
  };

  const loadPreviousCards = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop(); 
    }
  };

  const paginationRange = () => {
    const maxDisplayPages = 4;
    const middlePage = Math.ceil(maxDisplayPages / 2);
    const totalPages = Math.min(maxDisplayPages, totalPageCount);
  
    if (totalPages >= totalPageCount) {
      return Array.from({ length: totalPageCount }, (_, i) => i + 1);
    }
  
    if (currentPage <= middlePage) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage >= totalPageCount - middlePage) {
      return Array.from({ length: totalPages }, (_, i) => totalPageCount - totalPages + i + 1);
    } else {
      return Array.from({ length: totalPages }, (_, i) => currentPage - middlePage + i + 1);
    }
  };
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  // La referencia que llevará al principio del componente
  
  return (
    <>
     <div ref={topRef} style={{ position: 'relative', top: '-50px' }}></div>;
      <div className="container mx-auto row my-5 pt-5 bg-black">
     
        {profiles.length === 0 ? (
          <div className="col-12 text-center text-white border">
            <strong>{isDefaultLang ? 'No se encontraron perfiles' : 'No profile found!!'}</strong>
          </div>
        ) : (
          <></>
        )}
        {currentProfiles.map((profile) => (
          <ProfileCard
            lang={lang}
            key={profile.id}
            name={profile.name}
            image_url={profile.images[0]}
            is_local={profile.images[0].localFile ? true : false}
            available={profile.available}
            is_new={profile.is_new}
            active={profile.active}
            city={profile.category_city}
            description={
              profile.description && profile.description.length > 20
                ? profile.description.includes('<') || profile.description.includes('>')
                  ? profile.description
                  : profile.description.slice(0, 130)
                : _texts[4][lang]
            }
            description_en={
              profile.description_en && profile.description_en.length > 20
                ? profile.description_en.includes('<') || profile.description_en.includes('>')
                  ? profile.description_en
                  : profile.description_en.slice(0, 130)
                : _texts[4][lang]
            }
          />
        ))}
        {filteredProfiles.length === profiles.length ? <></> : <div ref={loadingPixel} className="col-12 py-5 text-primary text-center"></div>}
        {filteredProfiles.length > profilesPerPage ? (
        <div className="pagination justify-content-center">
          <ul className="pagination ">
            {currentPage > 1 && (
              <li className="page-item">
                <button onClick={loadPreviousCards} className="page-link">
                  Previous
                </button>
              </li>
            )}
            {paginationRange().map((number) => (
              <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                <button onClick={() => {setCurrentPage(number);  scrollToTop();}} className="page-link">
                  {number}
                </button>
              </li>
            ))}
            {currentPage < totalPageCount && (
              <li className="page-item">
                <button onClick={loadMoreCards} className="page-link">
                  Next
                </button>
              </li>
            )}
          </ul>
        </div>
         ) : null}
      </div>
    </>
  );
};

ProfileCardsWrapper.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.object),
};

ProfileCardsWrapper.defaultProps = {
  profiles: [],
};

export default ProfileCardsWrapper;

const _texts = {
  4: {
    en: 'The best escorts, call girls, companions, hookers & whores in Colombia. Luxury escorts and companions',
    es: 'Las mejores prepagos escorts, call girls, putas, putas y acompañantes universitarias vip en Colombia. La mejor agencia de Colombia',
  },
};
