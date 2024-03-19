import * as S from "./style";
import Title from "components/Common/Title";
import { useRecoilState } from "recoil";
import { allowMusicInfoIdAtom } from "store/reducer";
import { Link } from "react-router-dom";
import useWakeupSongAllow from "hooks/wakeupSongAllow/useWakeupSongAllow";
import { useGetPendingMusicListQuery } from "queries/wakeupSong/wakeupSong.query";

const MusicList = () => {
  const [musicInfoId, setMusicInfoId] = useRecoilState(allowMusicInfoIdAtom);
  const {
    handleWakeupSongRefuse,
    hanldeWakeupSongAllow,
    isBroadcastClubMember,
  } = useWakeupSongAllow();

  const PendingMusicListData = useGetPendingMusicListQuery().data?.data.slice(
    0,
    16
  );

  return (
    <S.MusicListContainer>
      <S.TitleContainer>
        <Title
          titleMent={"신청 현황"}
          subTitleMent={"어떤 노래가 있는지 확인해보세요!"}
        />
        <Link className="seeMoreDetails" to={"/pendingmusicdetail"}>
          더보기
        </Link>
      </S.TitleContainer>

      <S.MusicListWrapper>
        {PendingMusicListData?.length !== 0 &&
          PendingMusicListData?.map((item, idx) => {
            const createdDate = item.createdAt.split(" ")[0];

            return (
              <S.MusicContainer
                key={idx}
                onClick={() => setMusicInfoId(item.id)}
              >
                <S.MusicTumbnailImg
                  src={item.thumbnailUrl}
                  onClick={() => window.open(item.videoUrl)}
                />

                <S.TitleWrap>
                  <S.TitleTopContainer>
                    <S.ApplyRanking>{idx + 1}</S.ApplyRanking>
                  </S.TitleTopContainer>

                  <S.VideoTitle>{item.videoTitle}</S.VideoTitle>
                  <S.CreatedDateContainer>
                    <div className="applyDay">신청일</div>
                    <div className="applyDate">{createdDate}</div>
                  </S.CreatedDateContainer>
                </S.TitleWrap>
              </S.MusicContainer>
            );
          })}
      </S.MusicListWrapper>

      {isBroadcastClubMember?.data && (
        <S.ApplyBtnContainer>
          <S.AllowBtn
            onClick={() =>
              musicInfoId !== 0 && hanldeWakeupSongAllow(musicInfoId)
            }
          >
            승인
          </S.AllowBtn>
          <S.RefuseBtn
            onClick={() =>
              musicInfoId !== 0 && handleWakeupSongRefuse(musicInfoId)
            }
          >
            거절
          </S.RefuseBtn>
        </S.ApplyBtnContainer>
      )}
    </S.MusicListContainer>
  );
};

export default MusicList;
