import * as S from "./MyMusicList.style";
import useWakeupSongMyData from "hooks/wakeupSongMy/useWakeupSongMyData";
import Title from "components/Common/Title";

const MyMusicList = () => {

  const { myData } = useWakeupSongMyData();

  return (
    <S.MyMusicListContainer>
      <Title titleMent={"내가 신청한 기상송"} subTitleMent={""} />

      <S.MyMusicListContents>
        {myData && myData.map((item, idx) => {
          const createdDate = item.createdDate.split(" ")[0];

          return (
            <S.MyMusicContainer key={idx}>
              <S.MyMusicThumbnailImg src={item.thumbnailUrl} alt={item.videoTitle} />
              <S.MyMusicThumbnailTitle>{item.videoTitle}</S.MyMusicThumbnailTitle>
              <S.CreatedDateContainer>
                <div style={{ color: "#c5c5c5" }}>신청일</div>
                <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
              </S.CreatedDateContainer>
            </S.MyMusicContainer>
          )
        })}
      </S.MyMusicListContents>
    </S.MyMusicListContainer>
  );
};

export default MyMusicList;