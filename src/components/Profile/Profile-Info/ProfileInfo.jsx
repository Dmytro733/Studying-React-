import style from "./ProfileInfo.module.css";
import React from "react";

const AuthorInfo = () => {
  return (
    <div className={style.profile_content}>
      <div className={style.author_info}>
        <div className={style.author_photo_wrap}>
          <div className={style.author_photo}>
            <img src="https://line25.com/wp-content/uploads/2016/06/6-Code-Wallpaper.jpg" alt="" />
          </div>
        </div>
        <div className={style.author_data_wrap}>
          <div className={style.author_data}>
            <div className={`${style.author_name} ${style.author_date_item}`}>DamiKing</div>
            <div className={style.author_date_item}>
              <span>Day of Birth:</span>
              <span className={style.author_birth}>4 April</span>
            </div>
            <div className={style.author_date_item}>
              <span>City:</span>
              <span className={style.author_home_location}>Ivano-Frankovsk</span>
            </div>
            <div className={style.author_date_item}>
              <span>Education:</span>
              <span className={style.author_education}>IFNTU-NH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;