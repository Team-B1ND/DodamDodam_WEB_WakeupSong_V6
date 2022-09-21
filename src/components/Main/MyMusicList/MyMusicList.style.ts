import styled from "styled-components";

export const MyMusicListContainer = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 10px;
`;

export const MyMusicListTitle = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const MyMusicListContents = styled.div`
  display: flex;
  gap: 10px;
`;

export const MyMusicContainer = styled.div`
  width: 300px;
  cursor: pointer;
`;

export const MyMusicThumbnailImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const MyMusicThumbnailTitle = styled.div`
  padding: 10px 0px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CreatedDateContainer = styled.div`
  font-size: 0.85rem;
  display: flex;
  gap: 7px;
`;
