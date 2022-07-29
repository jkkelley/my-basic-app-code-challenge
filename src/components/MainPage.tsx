import AppBar from './AppBar';
import axios from 'axios';

import { TopAppBar, TopAppBarContainer } from '../style/appbar/appBarStyling';
import {
  Box,
  Container,
  HooverElement,
  Images,
  ListContainer,
  ListItem,
  MainPageContainer,
  NumberedList,
  Numbers,
  Section,
  SpanDisplay,
  TextBody,
  TitleContainer,
  Wrapper
} from '../style/mainPage/mainPageStyling';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FontStyles from '../style/font/FontFamily';

interface Post {
  body: string;
  id: number;
  title: string;
}

function MainPage() {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  // State
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPost, setCurrentPost] = useState<Post>();

  const handleClick = (post: Post) => () => {
    navigate(`/${post.id}`);
  };

  useEffect(() => {
    // Get post from api and set state
    const getPosts = async () => {
      try {
        const postList = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(postList.data);

        if (params?.id) {
          const currentP = postList.data.find((p: Post) => p.id === Number(params.id));
          setCurrentPost(currentP);
        } else {
          // Sets initial currentPost to index 0
          setCurrentPost(postList.data[0]);
        }
      } catch (error) {
        console.log(`Sorry, we couldn't get your posts.`, error);
      }
    };
    getPosts();
  }, [params.id]);

  return (
    <>
      <FontStyles />
      <TopAppBar>
        <TopAppBarContainer>
          <AppBar />
        </TopAppBarContainer>
      </TopAppBar>

      <Wrapper>
        <MainPageContainer>
          <Section>
            {posts.length > 0 && (
              <ListItem>
                {posts.map((p, i) => (
                  <NumberedList key={p.id} onClick={handleClick(p)} role="button">
                    <Numbers>{i + 1}</Numbers>
                    <ListContainer>
                      <SpanDisplay spanTitle>{p.title}</SpanDisplay>
                    </ListContainer>
                    <HooverElement role="button"></HooverElement>
                  </NumberedList>
                ))}
              </ListItem>
            )}
          </Section>

          <Container>
            <Box>
              <Images src="https://picsum.photos/200/300" height="200" alt="Paella dish" />
              <TitleContainer>
                <TitleContainer titleContainer>
                  <SpanDisplay>{currentPost?.title}</SpanDisplay>
                </TitleContainer>
              </TitleContainer>
              <TextBody>{currentPost?.body}</TextBody>
            </Box>
          </Container>
        </MainPageContainer>
      </Wrapper>
    </>
  );
}

export default MainPage;
